import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/sitesActions';
import { getCurrentForecast } from '../actions/sitesActions';
import helpers from '../helpers/Helpers';
import Fade from 'react-reveal/Fade';
import SearchWeather from './SearchWeather';
import AddToFavorites from './AddToFavorites';
import CurrentWeather from './CurrentWeather';
import CurrForecast from './CurrForecast';
class Home extends Component {

    componentWillMount() {
        
        this.props.getCurrentWeather();
        this.props.getCurrentForecast();

    }

    render() {

        const { currWeather } = this.props;
        const { currForecast } = this.props;
        const currWeatherObj = helpers.getWeatherFilteredDataObj(currWeather);
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
//getCurrentForecast
const mapStateToProps = state => {

    return {
        currWeather: state.sitesReducer.currWeather,
        currForecast: state.sitesReducer.currForecast
    }
}

const mapDispatchToProps = disaptch => {
    return {
        getCurrentWeather() {
            disaptch(getCurrentWeather())
        },
        getCurrentForecast() {
            disaptch(getCurrentForecast())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);