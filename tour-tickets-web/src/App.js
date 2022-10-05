import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.counterUp = this.counterUp.bind(this);
    this.state = {
      count: 0,
    };
  }

  onClickBtn(){
    console.log('button clicked');
  }
  counterUp(){
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {/* instead of passing a string, we’re just passing a function below on onButtonClicked */}
        <Main text = "this is from props" onButtonClicked = {this.onClickBtn}/> 
         <button onClick={this.counterUp}> Counter Up </button>
         <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
