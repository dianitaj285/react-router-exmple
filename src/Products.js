import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

const PRODUCTS = [
  {name: 'product1'},
  {name: 'product2'},
  {name: 'product3'},
  {name: 'product4'},
  {name: 'product5'},
];

function List(props) {
  return (
    <ul>
      {props.products.map((product, index) => (
        <li
          key={index}
          onClick={props.onClick(product)}
          style={{cursor: 'pointer'}}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}

function Selected(props) {
  return <div>{props.match.params.name}</div>;
}

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [...PRODUCTS],
    };
  }

  handleSelected = product => event => {
    const parentRoute = this.props.match.path;
    this.props.history.push(`${parentRoute}/${product.name}`);
  };

  render() {
    const parentRoute = this.props.match.path;
    return (
      <div>
        <h1>Products</h1>
        <div>
          <Link to={`${parentRoute}`}>All</Link>{' '}
        </div>
        <Switch>
          <Route
            path={`${parentRoute}`}
            exact
            render={routerProps => (
              <List
                {...routerProps}
                products={this.state.products}
                onClick={this.handleSelected}
              />
            )}
          />
          <Route path={`${parentRoute}/:name`} component={Selected} exact />
        </Switch>
      </div>
    );
  }
}
