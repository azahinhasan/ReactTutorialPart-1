import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';

import { BrowserRouter } from 'react-router-dom';
//npm install -save react-router react-router-dom


//npm install axios -save


class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app"> //use basename to define the main route point
      <BrowserRouter basename="/my-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
