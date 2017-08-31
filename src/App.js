import React, { Component } from 'react';
import {Calculator} from './calculator.js';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-board">
          <Calculator />
        </div>
      </div>
    );
  }
}


export default App;
