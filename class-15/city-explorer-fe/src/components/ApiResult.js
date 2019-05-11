import React, {Component} from 'react';
import SingleApiResult from './SingleApiResult';

class ApiResult extends Component {
  render() {
    return (<div>
      <h3>Results from the {this.props.apiName} API</h3>
      {this.props.results.map( x => (<SingleApiResult text={x} key={x}></SingleApiResult>))}
    </div>
    )
  }
}

export default ApiResult;
