import React, { Component } from 'react';
import Sidebar from './Sidebar'
import './App.css';
import './Sidebar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TO-DO List</h2>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default App;
