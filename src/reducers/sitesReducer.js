
const initState = {

    currForecast: [],
    cityName: '',
    cityCode: 215854,
    isSearchFieldValid: true
}


const sitesReducer = (state = initState, action) => {

    switch (action.type) {
        //GET_CURRENT_FORECAST

        case "GET_CURRENT_FORECAST":

            state = { ...state, currForecast: action.payload }
            break;
        case "UPDATE_CITY_CODE":

            state = { ...state, cityCode: action.payload.cityCode }
            break;
        case "UPDATE_SEARCH_FIELD":
            state = { ...state, cityName: action.payload.cityName, isSearchFieldValid: action.payload.isSearchFieldValid }
            break;

        default:
            return state;
    }

    return state;
}


export default sitesReducer;