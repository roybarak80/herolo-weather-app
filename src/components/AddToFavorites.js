import React from 'react';
import { connect } from 'react-redux';
import { addForecastToFavorites } from '../actions/sitesActions';


const AddToFavorites = ({ currCityCode, onAddWeatherToFavorites }) => {

    return (
        <div className="flex-center">
            <i className="fa fa-heart"></i>
            <span className="btn btn-primary"
                onClick={() => { onAddWeatherToFavorites(currCityCode) }}>Add To Favorites</span>

        </div>
    )
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        currCityCode: state.sitesReducer.cityCode,
        currFavorites: state.sitesReducer.currFavorites,
    }
}

const mapDispatchToProps = dispatch => ({

    onAddWeatherToFavorites: (currCityCode) => { dispatch(addForecastToFavorites(currCityCode)) },

})

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites);

