import React from 'react';
import { connect } from 'react-redux';
import { searchWeatherByCity } from '../actions/sitesActions';

const SearchWeather = ({ cityName, onChange }) => (
    <div className="row form-group">
        <div className="col-md-12 flex-center-justify">
            <h1>cityName, {cityName}</h1>

            <input className="form-control search-input"
                value={cityName}
                onChange={(e) => { onChange(e.target.value) }}
                type="text" />
        </div>

    </div>
);

const mapStateToProps = state => {
    console.log(state)
    return {
        cityName: state.cityName
    }
}

const mapDispatchToProps = dispatch => ({
    onChange: (value) => { dispatch(searchWeatherByCity(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);
