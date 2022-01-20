import React, { useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries"

function Home()
{
    const [city, setCity] = useState(" "); 
    const [getWeather, { loading, data, error}] = useLazyQuery(
        GET_WEATHER_QUERY,
        {
            variables: {name: city},
        }
    );

    if (error) return <h1>Error Found</h1>
    
    function  climate() {
        getWeather();
    }
   
       
    if(data) {
        console.log(data);

    }
    return(
        <div className='Home'>
            <h1>Enter the city</h1>
            <input type="text" placeholder='City Name' onChange={(event) => setCity(event.target.value)} /> 
            <button onClick={climate}>
                Find..
            </button>

            <div className='weather'>
                {data && (
                    <>
                        <h1>{data.getCityByName.name}</h1>
                        <h1>{data.getCityByName.weather.temperature.actual}</h1>
                    
                    
                    </>
                )}
            </div>

        </div>
    )


}

export default Home;