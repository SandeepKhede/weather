import React, { useEffect, useState } from "react";
import "./css/style.css"
const Temapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")

    useEffect( () =>{
        const fetchApi = async () =>{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cc4925a538ca3fddbe7ccbe6b8bfb194`
                const response = await fetch(url);
                const resJson = await response.json();
                // console.log(resJson);
                //store update data
                setCity(resJson.main);
                
        };
        
        fetchApi();
    },[search] )
    return(
        <div className="container">
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search" 
                    value={search}
                    className="inputField" 
                    onChange={ (event) =>{
                            setSearch(event.target.value)
                    }}/>
                </div>
                  
            { !city ? (
                <p>No data</p>
            ) : (
                <div>
                <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel</h3>
            </div>

            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
            </div>
            )}

            {/* <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.main.temp}
                    </h1>
                    <h3 className="tempmin_max">Min : 5.25 Cel | Max : 5.25 Cel</h3>
            </div>

            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div> */}
            </div>
        </div>
    )
}

export default Temapp;