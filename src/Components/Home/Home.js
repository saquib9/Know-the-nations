import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {

    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    // console.log(countries[1].name)

    return (
        <div>
            {
                countries.map( (c) => <Countries country={c}></Countries> )
            }
        </div>
    )
};

export default Home;