import React, { } from 'react';

function CityList(props) {

    
    const {cities, del} = props;
    // const [cits,setCits] = useState(null);
    // console.log(cits);

    return (
        <ul>
            {
                cities.map((city)=>{
                    return <li key={city.id}>{city.name}  <button onClick={ del }> delete button</button> </li>
                })
            }
        </ul>
    );
}

export default CityList;