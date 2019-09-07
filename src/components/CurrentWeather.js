import React from 'react';


// import { connect } from 'react-redux';

const CurrentWeather = (props) => {

    const { weatherInfo } = props;
    if (weatherInfo) {
        return (
            <div className="flex-center">

                <img className="weather-icon"
                    src={`https://developer.accuweather.com/sites/default/files/${weatherInfo.icon}-s.png`}
                    alt="Sunny"
                    title={weatherInfo.iconPhrase}></img>
                <div className="weather-city-wrapper">
                    <div className="weather-city-title">{weatherInfo.city}</div>
                    <div>
                        <span>{weatherInfo.maxTemp}&#8451; - </span>
                        <span>{weatherInfo.minTemp}&#8451; </span>
                    </div>
                </div>


            </div>
        )


    }

};


export default CurrentWeather;