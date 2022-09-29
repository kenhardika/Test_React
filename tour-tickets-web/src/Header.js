import React from "react";
export class Header extends React.Component{
    render(){
        return (
            <header className="App-header">
                <div className="logo-header">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Panic! At the Posko </a>
                </div>
                <div className="navbar">
                    <div className="navbar nav">
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" >europe tour</a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">asia tour</a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">north america tour</a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">contact us</a>
                    </div>
                </div>
            </header>
        )
    }
}