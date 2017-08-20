import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// To do: 
// Create interface for it 
// allow % calculations 
// Create a memory interface

class Numbers extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      symbol: "",
      total: 0
    };

    this.handleClick = this.handleClick.bind(this);

  }

  calculations(symbol, value, total) {
    switch (symbol) {
      case "+":
        total += parseInt(value);
        break;
      case "-":
        total -= parseInt(value);
        break;
      case "/":
        total /= parseInt(value);
        break;
      case "*":
        total *= parseInt(value);
        break;
    }
    return total;
  }

  handleClick(e) {
    let value = this.state.value;
    let symbol = this.state.symbol;
    let total = this.state.total;

    if (e.target.value.match(/([0-9])/g)) {
      // the value is a number I want to save it on to number
      value += e.target.value;
      this.setState({ value: value });
    } else if (e.target.value.match(/([/*+-])/g)) {
      // if the value is not a number I want to save it symbol and pass the number to total.
      // if total is not 0 I want to check the symbol and add it to total
      if (symbol === "") {
        symbol = e.target.value;
        total = parseInt(value);
      } else {
        if (total === 0) {
          total = parseInt(value);
          symbol = e.target.value;
        } else if (total !== 0) {
         total = this.calculations(symbol, value, total);
        }
      }
      symbol = e.target.value;
      this.setState({ value: "", total: total, symbol: symbol });
    } else if (e.target.value.match(/(=)/g)) {
      total = this.calculations(symbol, value, total);
      value = total;
      this.setState({ value: total, symbol: "" });
    } else if (e.target.value === "C") {
      this.setState({
        value: 0,
        symbol: "",
        total: 0
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <div>
          <form>
            <label>
              <input type="number" value={this.state.value} />
            </label>
          </form>
        </div>

        <button
          type="submit"
          name="number"
          value="0"
          onClick={this.handleClick}
        >
          {numbers.keys[0]}
        </button>
        <button
          type="submit"
          name="number"
          value="1"
          onClick={this.handleClick}
        >
          {numbers.keys[1]}
        </button>
        <button
          type="submit"
          name="number"
          value="2"
          onClick={this.handleClick}
        >
          {numbers.keys[2]}
        </button>
        <button
          type="submit"
          name="number"
          value="3"
          onClick={this.handleClick}
        >
          {numbers.keys[3]}
        </button>
        <button
          type="submit"
          name="number"
          value="4"
          onClick={this.handleClick}
        >
          {numbers.keys[4]}
        </button>
        <button
          type="submit"
          name="number"
          value="5"
          onClick={this.handleClick}
        >
          {numbers.keys[5]}
        </button>
        <button
          type="submit"
          name="number"
          value="6"
          onClick={this.handleClick}
        >
          {numbers.keys[6]}
        </button>
        <button
          type="submit"
          name="number"
          value="7"
          onClick={this.handleClick}
        >
          {numbers.keys[7]}
        </button>
        <button
          type="submit"
          name="number"
          value="8"
          onClick={this.handleClick}
        >
          {numbers.keys[8]}
        </button>
        <button
          type="submit"
          name="number"
          value="9"
          onClick={this.handleClick}
        >
          {numbers.keys[9]}
        </button>

        <button
          type="submit"
          name="sum"
          name="number"
          value="+"
          onClick={this.handleClick}
        >
          {operations.actions[0]}
        </button>
        <button
          type="submit"
          name="rest"
          name="number"
          value="-"
          onClick={this.handleClick}
        >
          {operations.actions[1]}
        </button>
        <button
          type="submit"
          name="divide"
          name="number"
          value="/"
          onClick={this.handleClick}
        >
          {operations.actions[2]}
        </button>
        <button
          type="submit"
          name="multiply"
          name="number"
          value="*"
          onClick={this.handleClick}
        >
          {operations.actions[3]}
        </button>
        <button type="submit" name="clear" value="C" onClick={this.handleClick}>
          {operations.actions[4]}
        </button>
        <button
          type="submit"
          name="submit-result"
          name="number"
          value="="
          onClick={this.handleClick}
        >
          {operations.actions[5]}
        </button>
      </div>
    );
  }
}

const operations = {
  actions: ["+", "-", "/", "*", "C", "="]
};
const numbers = {
  keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-board">
          <Numbers />
        </div>
      </div>
    );
  }
}

export default App;
