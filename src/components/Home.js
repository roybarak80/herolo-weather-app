import React from 'react';
import Fade from 'react-reveal/Fade';
import SearchWeather from './SearchWeather';
import AddToFavorites from './AddToFavorites';
import CurrentWeather from './CurrentWeather';

// import { connect } from 'react-redux';

const Home = () => (

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
                            <CurrentWeather></CurrentWeather>
                            <AddToFavorites></AddToFavorites>
                        </Fade>
                    </div>
                </div>
                <Fade top>
                    <h1>Home</h1>
                </Fade>
            </div>

        </div>

        {/* <Fade top>
            <h1>Home</h1>
        </Fade> */}


    </div >
);

// const mapStateToProps = state => {
//   return {
//     name: state.name
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onChange: (value) => { dispatch(updateName(value)) }
// })

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;