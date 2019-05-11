import React, {Component} from 'react';
import superagent from 'superagent';
import logo from './logo.svg';
import ApiResult from './components/ApiResult';
import './App.css';

const SERVER_URL = 'http://localhost:4000'

const RENDERERS = {
  'weather': (weather) => {
    return `The forecast for ${weather.time} is: ${weather.forecast}`
  },
  'events': (event) => {
    return (<div><a href={event.link}>{event.name}</a><br />Event date: {event.event_date}<br />{event.summary}</div>)
  }
}
class App extends Component {

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearchButtonClick = (e) => {
    superagent.get(SERVER_URL + '/location?data=' + this.state.searchTerm )
      .end( (err, res) => {
        if (res) {
          console.log('got res', res);

          // skipping the map step, intentionally

          // request all the other pieces of data that we want
          ['weather', 'events'].forEach(apiName => this.requestOneApi(apiName, res.body));
        }
      });
  }

  requestOneApi = (apiName, data) => {
    superagent.get(`${SERVER_URL}/${apiName}`)
      .query({data})
      .end( (err, res) => {
        // render that api's data
        console.log('got api res for ', apiName, res);
        let newState = (this.state && this.state.apiResults) || {};
        newState[apiName] = res.body.map(RENDERERS[apiName]);
        this.setState( {
          apiResults : newState
        });
      })
  }
  render() {
    let apiResults = [];
    if(this.state && this.state.apiResults) {
      for (let apiName in this.state.apiResults) {
        apiResults.push(<ApiResult apiName={apiName} results={this.state.apiResults[apiName]} key={apiName}></ApiResult>);
      }
    }
    return (
      <div className="App">
        <div className="search">
          <label htmlFor="search">Search for a location</label>
          <input id="search" onChange={this.updateSearchTerm} />
          <button onClick={this.handleSearchButtonClick}>Click me!</button>
        </div>
        <div className="apiResults">
          {apiResults}
        </div>
      </div>
    );
  }
}



export default App;
