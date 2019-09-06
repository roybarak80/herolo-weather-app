import React from 'react';
import Fade from 'react-reveal/Fade';
// import { connect } from 'react-redux';

const SearchWeather = () => (
    <div className="row form-group">
        <div className="col-md-12 flex-center-justify">
            <input className="form-control search-input" type="text" />
        </div>

    </div>
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
export default SearchWeather;