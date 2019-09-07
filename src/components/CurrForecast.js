
import React from 'react';
import Helpers from '../helpers/Helpers';
// import { connect } from 'react-redux';

const CurrForecast = (props) => {

    const { currForecast } = props;

    if (currForecast) {
        let dailyForecastsList = [];
        const dailyForecasts = currForecast['DailyForecasts'];
        if (!!dailyForecasts) {

            dailyForecastsList = dailyForecasts.map(function (prm, index) {
                const dayOfWeek = Helpers.getWeekDay(prm.Date);

                return <li className="forecast-box" key={index}>

                    <span className="forecast-day-text">{dayOfWeek}</span>
                    <span className="forecast-temp">
                        {prm.Temperature.Maximum.Value} &#8451;
                         </span>

                </li>;
            })

        }

        return (
            <div className="flex-center">
                <ul className="forecast-boxes-wrapper">
                    {dailyForecastsList}
                </ul>
            </div>
        )


    }

};


export default CurrForecast;