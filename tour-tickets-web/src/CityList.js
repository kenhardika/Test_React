import React from 'react';

function CityList(props) {
    const {cities} = props;
    return (
        <ul>
            {
                cities.map((city)=>{
                    return <li key={city.id}>{city.name}</li>
                })
            }
        </ul>
    );
}

export default CityList;