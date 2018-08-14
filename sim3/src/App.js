import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            {routes}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
