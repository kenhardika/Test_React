/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
export class Main extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <main className="App-main">
                <h2> {this.props.text}</h2>
            </main>
        ) 
    }
}