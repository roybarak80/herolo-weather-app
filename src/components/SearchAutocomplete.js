import React from 'react';
import { connect } from 'react-redux';
import { searchCityAutoComplete, onSelectCity, toggleShowResults } from '../actions/sitesActions';
import TextField from '@material-ui/core/TextField';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SearchAutocomplete = ({

    toggleShowResults,
    isShowResults,
    serachText, searchResults,
    onSelectCity,
    searchCityAutoComplete }) => (

        <div className="position-relative">

            <TextField
                id="outlined-full-width"
                label="Search City ForeCast"
                value={serachText}
                onClick={(e) => { toggleShowResults(isShowResults) }}
                onChange={(e) => { searchCityAutoComplete(e.target.value) }}
                placeholder="Search City"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {isShowResults && searchResults.length > 0
                ? <List className="search-results" dense>
                    {searchResults.map((value, index) => {
                        const labelId = `checkbox-list-secondary-label-${value.LocalizedName}`;
                        return (
                            <ListItem key={index} button
                                onClick={(e) => { onSelectCity(value.Key) }}>
                                <ListItemText id={labelId} primary={`${value.LocalizedName}`} />
                            </ListItem>
                        );
                    })}
                </List>
                : <span></span>
            }

        </div>
    );

const mapStateToProps = state => {
    //console.log(state)
    return {
        selectedCity: state.sitesReducer.selectedCity,
        searchResults: state.sitesReducer.searchResults,
        serachText: state.sitesReducer.serachText,
        isShowResults: state.sitesReducer.isShowResults,
    }
}


const mapDispatchToProps = dispatch => ({
    toggleShowResults: () => { dispatch(toggleShowResults()) },
    searchCityAutoComplete: (value) => { dispatch(searchCityAutoComplete(value)) },
    onSelectCity: (value) => { dispatch(onSelectCity(value)) },
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchAutocomplete);
