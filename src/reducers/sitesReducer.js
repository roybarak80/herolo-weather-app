const initState = {

    currForecast: [],
    cityName: '',
    cityCode: 215854,
    isMetricUnits: true,
    isSearchFieldValid: true,
    isOpenSideMenu: false,
    isDarkTheme: true,
    currFavorites: [215854,
        213225,
        // 328328,
        // 178087,
        // 349727
    ],
    siteError: '',
    favoriteForecasts: [],
    arrayFavoriteForecasts: [],
    searchResults: [],
    isShowResults: false,
    selectedCity: '',

}

const sitesReducer = (state = initState, action) => {

    switch (action.type) {

        //GET_CURRENT_WEATHER

        case "GET_CURRENT_WEATHER":

            state = {
                ...state,
                currWeather: action.payload
            }
            break;
        case "GET_CURRENT_FORECAST":

            state = {
                ...state,
                currForecast: action.payload
            }
            break;

        case "TOGGLE_SHOW_RESULTS":
            state = {
                ...state,
                isShowResults: action.payload
            }
            break;

        case "SELECT_CITY_FORECAST":
            state = {
                ...state,
                cityCode: action.payload
            }

            return Object.assign({}, state, { selectedCity: action.payload, isShowResults: false });

        case "AUTOCOMPLETE_SEARCH":

            return Object.assign({}, state, { searchResults: action.payload, isShowResults: true });

        case "FETCH_FAVORITE_FORECASTS_SUCCESS":

            state = {
                ...state,
                arrayFavoriteForecasts: action.payload
            }
            break;

        case "FETCH_FAVORITE_FORECASTS":

            state = {
                ...state,
                favoriteForecasts: action.payload
            }
            break;
        case "GET_FORECAST_BY_CITY_CODE":

            state = {
                ...state,
                currForecastByCityName: action.payload
            }
            break;

        case "UPDATE_CITY_CODE":

            state = {
                ...state,
                cityCode: action.payload.cityCode
            }
            break;

        case "UPDATE_SEARCH_FIELD":
            state = {
                ...state,
                cityName: action.payload.cityName,
                isSearchFieldValid: action.payload.isSearchFieldValid
            }
            break;

        case "SET_SIDEMENU_STATE":

            state = {
                ...state,
                isOpenSideMenu: action.payload
            }
            break;
        case "TOGGLE_WEATHER_UNITS":

            state = {
                ...state,
                isMetricUnits: action.payload
            }
            break;

        case "TOGGLE_THEME_TYPE":

            state = {
                ...state,
                isDarkTheme: action.payload
            }
            break;

        case "ADD_TO_FAVORITES":

            state = {
                ...state,
                currFavorites: [...state.currFavorites, action.payload]
            } //currFavorites: action.payload }
            console.log(state)
            break;

        case "FETCH_DATA_ERR":
            state = {
                ...state,
                siteError: action.payload
            } //currFavorites: action.payload }
            break;
        default:
            return state;
    }



    return state;
}

export default sitesReducer;