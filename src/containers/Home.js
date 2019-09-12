import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentForecast, toggleWeatherUnits, getCurrentWeather } from '../actions/sitesActions';


import helpers from '../helpers/Helpers';
import Fade from 'react-reveal/Fade';
import SearchWeather from '../components/SearchWeather';

import AddToFavorites from '../components/AddToFavorites';
import CurrentWeather from '../components/CurrentWeather';
import CurrForecast from '../components/CurrForecast';
import SearchAutocomplete from '../components/SearchAutocomplete';
class Home extends Component {

    componentWillMount() {

        const { cityCode } = this.props;
        const { isMetricUnits } = this.props;

        this.props.getCurrentWeather(cityCode);
        this.props.getCurrentForecast(cityCode, isMetricUnits);
    }

    componentDidUpdate(prevProps) {

        const { cityCode } = this.props;
        const { isMetricUnits } = this.props;
        if (prevProps.cityCode !== cityCode) {
            console.log('updating city!!');
            this.props.getCurrentWeather(cityCode);

        }
        if (prevProps.isMetricUnits !== isMetricUnits) {
            this.props.getCurrentForecast(cityCode, isMetricUnits);

        }
    }


    render() {
        const { cityCode } = this.props;
        const { currForecast } = this.props;
        const { currWeather } = this.props;
        const { isMetricUnits } = this.props;
        const currWeatherObj = currWeather ? helpers.getWeatherFilteredDataObj(currWeather, isMetricUnits) : {};
        const currForecastObj = Object.assign({}, currForecast ? currForecast : {}, { isMetricUnits: isMetricUnits });

        return (
            <div >
                <div className="row ">
                    <div className="col-md-12">
                        <SearchAutocomplete></SearchAutocomplete>
                        {/* <SearchWeather></SearchWeather> */}

                    </div>
                </div>
                <div className="row curr-weather-box">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 flex-spread-evenly">
                                <Fade top>

                                    <CurrentWeather weatherInfo={currWeatherObj} ></CurrentWeather>
                                    <AddToFavorites cityCode={cityCode}></AddToFavorites>
                                </Fade>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Fade top>
                                    <CurrForecast currForecast={currForecastObj}></CurrForecast>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {

    return {
        currWeather: state.sitesReducer.currWeather,
        currForecast: state.sitesReducer.currForecast,
        cityCode: state.sitesReducer.cityCode,
        isMetricUnits: state.sitesReducer.isMetricUnits
    }
}

const mapDispatchToProps = disaptch => {
    return {

        toggleWeatherUnits() {
            disaptch(toggleWeatherUnits())
        },
        getCurrentWeather(cityCode) {
            disaptch(getCurrentWeather(cityCode))
        },
        getCurrentForecast(cityCode, isMetricUnits) {
            disaptch(getCurrentForecast(cityCode, isMetricUnits))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);