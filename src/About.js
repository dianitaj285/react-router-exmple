import React, {Component} from 'react';

export default class About extends Component {

  handleBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <h1>About page</h1>
	<button onClick={this.handleBack}>Go Back</button>
      </div>
    );
  }
}
