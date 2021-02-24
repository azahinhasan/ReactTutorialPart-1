import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';

import { BrowserRouter } from 'react-router-dom';
//npm install -save react-router react-router -dom


//npm install axios -save


class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
