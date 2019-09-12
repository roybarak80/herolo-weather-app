import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Fade from 'react-reveal/Fade';
import FavoritesList from '../components/FavoritesList';
import { getForecastByCityCode } from '../actions/sitesActions';
import { AutoResponsive } from 'autoresponsive-react';

class Favorites extends Component {

  componentWillMount() {

    const { favoriteForecasts } = this.props;
    const { arrayFavoriteForecasts } = this.props;

    this.props.getForecastByCityCode(favoriteForecasts);
    console.log(arrayFavoriteForecasts)
    // this.props.getCurrentForecast(cityCode);

  }

  // getAllForecasts = () => {

  //   let favoriteForecastsFromApi = [];
  //   favoriteForecasts.map(cityCode => favoriteForecastsFromApi.push(this.getForecastByCityCode(cityCode)));
  // }
  render() {
    return (
      <div>
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {
            [1, 2, 3].map(function (i) {
              return <div onClick={this.clickItemHandle} className="item" style={this.state.styleList[i]}>{i}</div>;
            }, this)
          }
        </AutoResponsive>
        {/* <FavoritesList favoriteForecasts={favoriteForecasts}></FavoritesList> */}
      </div>

    )
  }
}

const mapStateToProps = state => {

  return {
    favoriteForecasts: state.sitesReducer.currFavorites,
    arrayFavoriteForecasts: state.sitesReducer.arrayFavoriteForecasts,
  }
}

const mapDispatchToProps = disaptch => {
  return {

    getForecastByCityCode(favoriteForecasts) {
      disaptch(getForecastByCityCode(favoriteForecasts))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

