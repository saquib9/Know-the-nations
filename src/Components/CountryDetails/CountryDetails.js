import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {

    let { naming } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/Afghanistan`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[naming])
    
    console.log(detail[0])
    debugger;

    //let { name, region, subregion, capital, currencies, languages } = detail[0];

    return (
        <div>
            <h2>Details of : {detail[0].capital} </h2>
            {/* <h3>Region : {region}</h3>
            <h3>Sub Region : {subregion}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Currency : {currencies[0].name}</h3>
            <h3>Language : {languages[0].name} ({languages[0].nativeName})</h3> */}
        </div>
    );
};

export default CountryDetails;