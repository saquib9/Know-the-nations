import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {

    let { naming } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${naming}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    },[])
    
    return (
        <div>
            {detail.length !== 0 && detail.map ( data => 
                        <>
                        <h2>Details of : {data.capital} </h2>
                        <h3>Region : {data.region}</h3>
                        <h3>Sub Region : {data.subregion}</h3>
                        <h3>Capital : {data.capital}</h3>
                        <h3>Currency : {data.currencies[0].name}</h3>
                        <h3>Language : {data.languages[0].name} ({data.languages[0].nativeName})</h3>
                        </>
            )}
        </div>
    );
    debugger;
};

export default CountryDetails;