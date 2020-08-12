import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  handleNavigation = () => {
    console.log(this.props);
    this.props.history.push('/about')
  };

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <div>
          <Link to="/about">About</Link>
          <button onClick={this.handleNavigation}>
            Navigate Programatically
          </button>
          <Link to="/products">Products</Link>
        </div>
      </div>
    );
  }
}
