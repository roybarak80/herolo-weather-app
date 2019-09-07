const initState = {
    currWeather: [],
    currForecast: [],
    cityName: '',
}

const sitesReducer = (state = initState, action) => {

    switch (action.type) {
        //GET_CURRENT_FORECAST
        case "GET_CURRENT_WEATHER":

            state = { ...state, currWeather: action.payload }
            break;
        case "GET_CURRENT_FORECAST":

            state = { ...state, currForecast: action.payload }
            break;
        case "SEARCH_WEATHER_BY_CITY":
           
            state = { ...state, cityName: action.payload }
            break;
        default:
            return state;
    }

    return state;
}


export default sitesReducer;