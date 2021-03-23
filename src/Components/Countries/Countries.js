import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import './Countries.css'

const Countries = (props) => {

    const { name, region, capital } = props.country;

    let history = useHistory()

    const handleClick = (name) => {
        history.push(`/country/${name}`)
    }

    const decor = {
        border : '2px solid cyan',
        padding : '20px',
        margin : '20px',
        borderRadius : '15px'
    }

    // let { naming } = useParams();

    // const [detail, setDetail] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://restcountries.eu/rest/v2/name/${naming}`)
    //     .then(res => res.json())
    //     .then(data => setDetail(data))
    // },[])
    
    // console.log(detail)

    return (
        <div>
            {
                    <div style={decor}>
                        <h2>Country name : {name}</h2>
                        <h4>Region : {region}</h4>
                        <h4>Capital : {capital}</h4>
                        <button onClick={() => handleClick(name) } >Check details</button>
                    </div> 
            }
        </div>
    );
};

export default Countries;