import React, {Component} from 'react';

class SingleApiResult extends Component {
  render() {
    return (<div className="singleApiResult">
      {this.props.text}
    </div>);
  }
}

export default SingleApiResult;
