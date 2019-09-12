
import React from 'react';

const FavoritesList = (props) => {

    const { favoriteForecasts } = props;

    console.log(favoriteForecasts)
    if (favoriteForecasts) {
        let currFavoriteForecasts = [];

        currFavoriteForecasts = favoriteForecasts.map(function (prm, index) {

            return <li className="forecast-box" key={index}>

                {prm}
                {/* <span className="forecast-day-text">{dayOfWeek}</span>
                    <span className="forecast-temp">
                        {prm.Temperature.Maximum.Value} &#8451;
                         </span> */}

            </li>;
        })

        return (
            <div className="flex-center">
                <ul className="forecast-boxes-wrapper">
                    {currFavoriteForecasts}
                </ul>
            </div>
        )


    }

};


export default FavoritesList;