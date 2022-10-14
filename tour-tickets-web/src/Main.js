/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import HooksTest from './HooksTest';
export class Main extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        // console.log(this.props);
        // with class component, use this inside render
        // dissect property entering from outside to this.props{a,b} and assign a to text then b to onButtonClicked
        // const {text, onButtonClicked} = this.props; 
        // console.log(text);
        // console.log(onButtonClicked);
        return (
            <main className="App-main">
                <HooksTest />
            </main>
        ) 
    }
}