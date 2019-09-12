import dataApi from './dataService';

const defaultCityCode = 215854;
//const apiKey = 'process.env.REACT_APP_API_KEY'; 
//8TtD5SvGpdCQKaGaT3JLAtitbpZxyJvN
//AKYAzUjXGDLV2Eyr2L68TInkVV9530H3
//FNmwUFAldRAOU6phF57H4dK1bdWGhBal
const apiKey = 'FNmwUFAldRAOU6phF57H4dK1bdWGhBal'//'AKYAzUjXGDLV2Eyr2L68TInkVV9530H3';
const api_root_url = "http://dataservice.accuweather.com/";
const axios = require('axios');


//http://dataservice.accuweather.com/forecasts/v1/daily/1day/215854?apikey=FNmwUFAldRAOU6phF57H4dK1bdWGhBal
export const getCurrentWeather = (prmCityCode) => {

    return {
        type: "GET_CURRENT_WEATHER",
        payload: dataApi.getCurrDayForeCast()
    };
    // return async dispatch => {
    //     fetch(`http://dataservice.accuweather.com/currentconditions/v1/${prmCityCode}?apikey=${apiKey}`)
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

export const getCurrentForecast = (prmCityCode, prmIsMetricUnits) => {
    //defaultCityCode

    //console.log(prmIsMetricUnits);
    return {
        type: "GET_CURRENT_FORECAST",
        payload: dataApi.getCurrWeekForeCast()
    };

    // return async dispatch => {
    //     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${prmCityCode}?apikey=${apiKey}&metric=${prmIsMetricUnits}`)
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

export const toggleShowResults = (isShowResults) => {

    isShowResults = !isShowResults
    return {
        type: "TOGGLE_SHOW_RESULTS",
        payload: isShowResults
    };
}
export const toggleWeatherUnits = (isMetricUnits) => {

    console.log(isMetricUnits)
    isMetricUnits = !isMetricUnits
    return {
        type: "TOGGLE_WEATHER_UNITS",
        payload: isMetricUnits
    };
}


export const onSelectCity = selectedCity => {
    console.log('selectedCity', selectedCity);
    return {
        type: "SELECT_CITY_FORECAST",
        payload: selectedCity
    };
}
export const searchCityAutoComplete = searchText => {
    const data = dataApi.getCurrAutoCompleteData();
    let filterdata = [];
    console.log(3456, searchText);
    if (!!searchText && searchText.length > 0) {
        const textToSearch = searchText.toLowerCase().trim();
        filterdata = data.filter(prm => { return prm.LocalizedName.toLowerCase().trim().indexOf(textToSearch) > -1 });

    }

    return {
        type: "AUTOCOMPLETE_SEARCH",
        payload: filterdata
    };
    // return async dispatch => {
    //     fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchText}`)
    //         .then(function (response) {

    //             return response.json();
    //         })
    //         .then(function (data) {
    //             return dispatch({
    //                 type: "AUTOCOMPLETE_SEARCH",
    //                 payload: data
    //             });
    //         });
    // };
}
export const addForecastToFavorites = (currCityCode) => {
    console.log(currCityCode);
    return {
        type: "ADD_TO_FAVORITES",
        payload: currCityCode
    };
}

export const toggleSideMenu = (currSideMenuState) => {

    currSideMenuState = !currSideMenuState;
    return {
        type: "SET_SIDEMENU_STATE",
        payload: currSideMenuState
    };
}

export const toggleThemeType = (currThemeType) => {

    currThemeType = !currThemeType;
    return {
        type: "TOGGLE_THEME_TYPE",
        payload: currThemeType
    };
}

export const getForecastByCityCode = (favoriteCitiesNames) => {

    return {
        type: "FETCHING_DATA",
        payload: favoriteCitiesNames
    };

}
// export const ToggleWeatherUnits = (currThemeType) => {

//     currThemeType = !currThemeType;
//     return {
//         type: "TOGGLE_THEME_TYPE",
//         payload: currThemeType
//     };
// }


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
