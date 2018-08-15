import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          {this.props.location.pathname !== '/' && <Nav />}
          {routes}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
