import React from 'react';
import { connect } from 'react-redux';
import { searchWeatherByCity, updateSearchField } from '../actions/sitesActions';

const SearchWeather = ({ cityName, isSearchFieldValid, onChange, onSendClicked }) => (
    <div className="row form-group">
        <div className="col-md-12 flex-center-justify">
            <h1>cityName, {cityName}</h1>

            <input className="form-control search-input"
                value={cityName}
                onChange={(e) => { onChange(e.target.value) }}
                type="text"
            />
            <button onClick={() => { onSendClicked(cityName) }}>Foo</button>
            {!isSearchFieldValid ? 'Invalid' : ''}
        </div>

    </div>
);

const mapStateToProps = state => {
    console.log(state)
    return {
        cityName: state.sitesReducer.cityName,
        isSearchFieldValid: state.sitesReducer.isSearchFieldValid
    }
}

const mapDispatchToProps = dispatch => ({
    onChange: (value) => { dispatch(updateSearchField(value)) },
    onSendClicked: (value) => { dispatch(searchWeatherByCity(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);
