import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import React, { Component } from 'react';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {/* instead of passing a string, we’re just passing a function below on onButtonClicked */}
        <Main text = "this is from props" onButtonClicked = {this.onClickBtn}/> 
        <Footer/>
      </div>
    );
  }
}

export default App;
