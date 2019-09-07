
const defaultCityCode = 215854;
const apiKey = 'FNmwUFAldRAOU6phF57H4dK1bdWGhBal'; // to do config

const forecastObj = { "Headline": { "EffectiveDate": "2019-09-07T08:00:00+03:00", "EffectiveEpochDate": 1567832400, "Severity": 4, "Text": "Pleasant this weekend", "Category": "", "EndDate": null, "EndEpochDate": null, "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us" }, "DailyForecasts": [{ "Date": "2019-09-06T07:00:00+03:00", "EpochDate": 1567742400, "Temperature": { "Minimum": { "Value": 23.5, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 31.0, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us" }, { "Date": "2019-09-07T07:00:00+03:00", "EpochDate": 1567828800, "Temperature": { "Minimum": { "Value": 26.2, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.8, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 36, "IconPhrase": "Intermittent clouds", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us" }, { "Date": "2019-09-08T07:00:00+03:00", "EpochDate": 1567915200, "Temperature": { "Minimum": { "Value": 24.6, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.7, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us" }, { "Date": "2019-09-09T07:00:00+03:00", "EpochDate": 1568001600, "Temperature": { "Minimum": { "Value": 23.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.6, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us" }, { "Date": "2019-09-10T07:00:00+03:00", "EpochDate": 1568088000, "Temperature": { "Minimum": { "Value": 23.4, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us" }] }
export const getCurrentForecast = (cityCode) => {
    //defaultCityCode

    ///console.log();
    // return {
    //     type: "GET_CURRENT_FORECAST",
    //     payload: forecastObj
    // };

    return async dispatch => {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${apiKey}&metric=true`)
            .then(function (response) {

                return response.json();
            })
            .then(function (data) {
                return dispatch({
                    type: "GET_CURRENT_FORECAST",
                    payload: data
                });
            });
    };
};

export const updateSearchField = (cityName) => {
    // Check if input is OK
    var validationReg = /^[A-Za-z\s]*$/;
    let isValid = true;
    // if it's not OK, update the isNameValid state
    if (!validationReg.test(cityName)) {
        isValid = false;

    }
    const data = {
        cityName: cityName,
        isSearchFieldValid: isValid
    };
    return {
        type: "UPDATE_SEARCH_FIELD",
        payload: data
    };
}

export const searchWeatherByCity = (cityName) => {

    // const res = [{ "Version": 1, "Key": "212474", "Type": "City", "Rank": 45, "LocalizedName": "Netanya", "EnglishName": "Netanya", "PrimaryPostalCode": "", "Region": { "ID": "MEA", "LocalizedName": "Middle East", "EnglishName": "Middle East" }, "Country": { "ID": "IL", "LocalizedName": "Israel", "EnglishName": "Israel" }, "AdministrativeArea": { "ID": "M", "LocalizedName": "Central District", "EnglishName": "Central District", "Level": 1, "LocalizedType": "District", "EnglishType": "District", "CountryID": "IL" }, "TimeZone": { "Code": "IDT", "Name": "Asia/Jerusalem", "GmtOffset": 3.0, "IsDaylightSaving": true, "NextOffsetChange": "2019-10-26T23:00:00Z" }, "GeoPosition": { "Latitude": 32.329, "Longitude": 34.857, "Elevation": { "Metric": { "Value": 47.0, "Unit": "m", "UnitType": 5 }, "Imperial": { "Value": 154.0, "Unit": "ft", "UnitType": 0 } } }, "IsAlias": false, "SupplementalAdminAreas": [], "DataSets": ["Alerts"] }];
    // if it's OK, send a request

    return async dispatch => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal&q=${cityName}`)
            .then(function (response) {


                //{Version: 1, Key: "212474", Type: "City", Rank: 45, LocalizedName: "Netanya", EnglishName: "Netanya",…}
                //return { "fooo": 5 };
                return response.json();

                // getting the code of the first match
            })
            .then(function (res) {
                const data = {};
                if (res.length > 0) {
                    data.cityCode = res[0]["Key"];
                }
                return dispatch({
                    type: "UPDATE_CITY_CODE",
                    payload: data
                })
            });
    }


    // http://dataservice.accuweather.com/forecasts/v1/daily/5day/215850?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal
    // https://jsonplaceholder.typicode.com/todos/

    //https://jsonplaceholder.typicode.com/todos/1
}
