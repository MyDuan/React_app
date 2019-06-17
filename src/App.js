import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = {count:0}

  }

  handleClick_u() {
      this.setState({count:this.state.count + 1});
  }

  handleClick_d() {
    if(this.state.count > 0){
      this.setState({count:this.state.count - 1});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.count}
          </h1>
          <button onClick={()=>{this.handleClick_u()}}>+</button>
          <button onClick={()=>{this.handleClick_d()}}>-</button>
        </header>
      </div>
    );
  }
}

export default App;
