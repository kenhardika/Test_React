import React, { Component } from 'react';
import uniqid from "uniqid";
import CityList from './CityList';

class TourPanel extends Component {
    constructor(){
        super();
        this.state = {
            city: { name: '', id: uniqid() },
            cities: [], 
        };
    }
    
    handleChange = (e) => {
        this.setState({
            city: {
                name: e.target.value,
                id: this.state.city.id,
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            cities: this.state.cities.concat(this.state.city),
            city:{
                name:'',
                id: uniqid()
                },
        });
    };

    render() {
        const {city, cities} = this.state;

        return (
            <div className='tourPanel'>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="cityInput">Enter City</label>
                    <input 
                    onChange={this.handleChange}
                    value={city.name}
                    type="text" 
                    id='cityInput'/>
                    <button type='submit'>Add City</button>
                </form>
                <CityList cities = {cities}/>
            </div>
        );
    }
}

export default TourPanel;