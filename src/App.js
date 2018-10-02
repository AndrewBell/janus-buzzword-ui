import React, { Component } from 'react';
import './App.css';
import StartupPitch from './StartupPitch/StartupPitchComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The next hot startup is:</h1>
          <StartupPitch />
        </header>
      </div>
    );
  }
}

export default App;
