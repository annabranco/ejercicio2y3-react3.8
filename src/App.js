import React, { Component } from 'react';
import './App.css';
import SheepCounter from './components/SheepCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
      <SheepCounter />
      </div>
    );
  }
}

export default App;
