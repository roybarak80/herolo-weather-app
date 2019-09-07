
const defaultCityCode = 215854;
const apiKey = 'FNmwUFAldRAOU6phF57H4dK1bdWGhBal';
const dataObj = { "Headline": { "EffectiveDate": "2019-09-08T02:00:00+03:00", "EffectiveEpochDate": 1567897200, "Severity": 4, "Text": "Expect showers late Saturday night", "Category": "rain", "EndDate": "2019-09-08T08:00:00+03:00", "EndEpochDate": 1567918800, "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us" }, "DailyForecasts": [{ "Date": "2019-09-04T07:00:00+03:00", "EpochDate": 1567569600, "Temperature": { "Minimum": { "Value": 25.3, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.1, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us" }] }
//http://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal
export const getCurrentWeather = () => {

    return {
        type: "GET_CURRENT_WEATHER",
        payload: dataObj
    };
    // return async dispatch => {
    //     fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal&metric=true`)
    //         .then(function (response) {
    //             console.log(response);
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             return dispatch({
    //                 type: "GET_CURRENT_WEATHER",
    //                 payload: data
    //             });
    //         });
    // };
};

const forecastObj = { "Headline": { "EffectiveDate": "2019-09-07T08:00:00+03:00", "EffectiveEpochDate": 1567832400, "Severity": 4, "Text": "Pleasant this weekend", "Category": "", "EndDate": null, "EndEpochDate": null, "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us" }, "DailyForecasts": [{ "Date": "2019-09-06T07:00:00+03:00", "EpochDate": 1567742400, "Temperature": { "Minimum": { "Value": 23.5, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 31.0, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us" }, { "Date": "2019-09-07T07:00:00+03:00", "EpochDate": 1567828800, "Temperature": { "Minimum": { "Value": 26.2, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.8, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 36, "IconPhrase": "Intermittent clouds", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us" }, { "Date": "2019-09-08T07:00:00+03:00", "EpochDate": 1567915200, "Temperature": { "Minimum": { "Value": 24.6, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.7, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us" }, { "Date": "2019-09-09T07:00:00+03:00", "EpochDate": 1568001600, "Temperature": { "Minimum": { "Value": 23.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.6, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us" }, { "Date": "2019-09-10T07:00:00+03:00", "EpochDate": 1568088000, "Temperature": { "Minimum": { "Value": 23.4, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us" }] }
export const getCurrentForecast = () => {
    //defaultCityCode

    return {
        type: "GET_CURRENT_FORECAST",
        payload: forecastObj
    };
    //http://dataservice.accuweather.com/forecasts/v1/daily/5day/215850?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal
    // return async dispatch => {
    //     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${defaultCityCode}?apikey=${apiKey}&metric=true`)
    //         .then(function (response) {

    //             return response.json();
    //         })
    //         .then(function (data) {
    //             return dispatch({
    //                 type: "GET_CURRENT_FORECAST",
    //                 payload: data
    //             });
    //         });
    // };
};

export const searchWeatherByCity = (cityName) => {

    http://dataservice.accuweather.com/forecasts/v1/daily/5day/215850?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal
    var reg = /^[A-Za-z0-9]*$/;
    //console.log(reg.test(cityName)); //true
    //console.log(cityName.match(reg)[0]); //"somethingELSE"
    if (!!reg.test(cityName)) {
        console.log(reg.test(cityName));
        return async dispatch => {
            fetch(`${cityName}`)
                .then(function (response) {

                    return response.json();
                })
                .then(function (data) {
                    return dispatch({
                        type: "SEARCH_WEATHER_BY_CITY",
                        payload: data
                    });
                });
        };
    }
    // https://jsonplaceholder.typicode.com/todos/

    //https://jsonplaceholder.typicode.com/todos/1
}
