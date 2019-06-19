import React, { Component } from 'react';
import Language from './Language'
import logo from '../logo.svg';
import '../App.css';

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

    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      }];

    return (
      <div className="App">
        <header className="App-header">
          <h1>言語一覧</h1>
          <div className="language">
            {languageList.map((languageItem) => {
              return (
                <Language
                  name = {languageItem.name}
                  image = {languageItem.image}
                />
              )
            })}
          </div>
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
