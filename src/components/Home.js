import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentForecast } from '../actions/sitesActions';
import helpers from '../helpers/Helpers';
import Fade from 'react-reveal/Fade';
import SearchWeather from './SearchWeather';
import AddToFavorites from './AddToFavorites';
import CurrentWeather from './CurrentWeather';
import CurrForecast from './CurrForecast';

class Home extends Component {

    componentWillMount() {

        const { cityCode } = this.props;
        this.props.getCurrentForecast(cityCode);

    }

    componentDidUpdate(prevProps) {

        const { cityCode } = this.props;
        if (prevProps.cityCode != cityCode) {
            console.log('updating city!!');
            this.props.getCurrentForecast(cityCode);
        }

    }


    render() {

        const { currForecast } = this.props;
        const currWeatherObj = helpers.getWeatherFilteredDataObj(currForecast);
        // console.log(currForecast);
        return (
            <div className="">
                <div className="row ">
                    <div className="col-md-12">
                        <SearchWeather></SearchWeather>
                    </div>
                </div>
                <div className="row curr-weather-box">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 flex-spread-evenly">
                                <Fade top>
                                    <CurrentWeather weatherInfo={currWeatherObj}></CurrentWeather>
                                    <AddToFavorites></AddToFavorites>
                                </Fade>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Fade top>
                                    <CurrForecast currForecast={currForecast}></CurrForecast>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        currForecast: state.sitesReducer.currForecast,
        cityCode: state.sitesReducer.cityCode
    }
}

const mapDispatchToProps = disaptch => {
    return {

        getCurrentForecast(cityCode) {
            disaptch(getCurrentForecast(cityCode))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);