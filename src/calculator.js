import React, { Component } from 'react';
import './calculator.css';

const operations = {
    actions: ["+", "-", "/", "*", "AC", "="]
};

const numbers = {
    keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};

export class Calculator extends Component {
    constructor() {
      super();
  
      this.state = {
        value: 0,
        symbol: "",
        total: 0
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    // the operations will be defined here
    calculations(symbol, value, total) {
      switch (symbol) {
        case "+":
          total += parseInt(value, 10);
          break;
        case "-":
          total -= parseInt(value, 10);
          break;
        case "/":
          total /= parseInt(value, 10);
          break;
        case "*":
          total *= parseInt(value, 10);
          break;
      }
      return total;
    }
  
    handleClick(e) {
      let value = this.state.value,
        symbol = this.state.symbol,
        total = this.state.total;
  
      if (e.target.value.match(/([0-9])/g) && this.state.value === 0) {
        value = e.target.value;
        this.setState({ value: value });
      } else if (e.target.value.match(/([0-9])/g)) {
        value += e.target.value;
        this.setState({ value: value });
      } else if (e.target.value.match(/([/*+-])/g)) {
        if (symbol === "") {
          symbol = e.target.value;
          total = parseInt(value, 10);
        } else {
          if (total === 0) {
            total = parseInt(value, 10);
            symbol = e.target.value;
          } else if (total !== 0) {
            total = this.calculations(symbol, value, total);
          }
        }
        symbol = e.target.value;
        this.setState({ value: 0, total: total, symbol: symbol });
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
        <div className="center-container">
          <div className="title">
            <h1>Calculator</h1>
          </div>
          <div className="calculator">
            <form>
              <label>
                <input
                  className="screen"
                  type="number"
                  value={this.state.value}
                />
              </label>
            </form>
          </div>
          <div className="container">
            <div className="button">
              <button
                type="submit"
                name="number"
                value="7"
                onClick={this.handleClick}
              >
                {numbers.keys[7]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="8"
                onClick={this.handleClick}
              >
                {numbers.keys[8]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="9"
                onClick={this.handleClick}
              >
                {numbers.keys[9]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="divide"
                name="number"
                value="/"
                onClick={this.handleClick}
              >
                {" "}         {operations.actions[2]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="4"
                onClick={this.handleClick}
              >
                {numbers.keys[4]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="5"
                onClick={this.handleClick}
              >
                {numbers.keys[5]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="6"
                onClick={this.handleClick}
              >
                {numbers.keys[6]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="multiply"
                name="number"
                value="*"
                onClick={this.handleClick}
              >
                {operations.actions[3]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="1"
                onClick={this.handleClick}
              >
                {numbers.keys[1]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="2"
                onClick={this.handleClick}
              >
                {numbers.keys[2]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="3"
                onClick={this.handleClick}
              >
                {numbers.keys[3]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="rest"
                name="number"
                value="-"
                onClick={this.handleClick}
              >
                {operations.actions[1]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number"
                value="0"
                onClick={this.handleClick}
              >
                {numbers.keys[0]}
              </button>
            </div>
            <div className="button results-button">
              <button
                type="submit"
                name="clear"
                value="C"
                onClick={this.handleClick}
              >
                {operations.actions[4]}
              </button>
            </div>
            <div className="button results-button">
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
            <div className="button operations-button">
              <button
                type="submit"
                name="sum"
                name="number"
                value="+"
                onClick={this.handleClick}
              >
                {operations.actions[0]}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  