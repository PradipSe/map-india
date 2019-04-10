import React, { Component, Fragment } from 'react'
import MapContainer from '../mapContainer'
import { H1, Grid, column, SearchSection, TempSpan, SearchList, SearchName, InputBox, LabelContainer, Labels, CloseButton, LabelSpan } from './style'
import { initiateMapDetails } from "../../actions/app/actionCreator"

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      cities: [],
      searchedData: [],
      userSearchedData: "",
      cityTemp:"",
      mapDetailsData: [],
      mapSelectedCordinate: [],
      userStartedSearching: false
    }
  }

  doSearch(e) {

    let searchedData = []
    const { mapData } = this.props;

    this.setState({ searchQuery: e.target.value });

    /**
     * Check if there is no input value then remove the search data.
     */
    e.target.value == "" &&
      this.setState(prevState => ({
        searchedData: []
      }));

    /**
     * User started searching
     */
    e.target.value === ""
      ? this.setState({ userStartedSearching: false })
      : this.setState({ userStartedSearching: true });


     /**
     * Logic to search.
     */
    let findedVal = mapData.filter(data => {
      if (data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1) {
        return;
      } else {
        searchedData.push(data);
      }
    });

    this.setState({ userSearchedData: searchedData });
  }

  addCityMarkup = (e) => {

    const { dispatch, mapDetails } = this.props;
    let inputValue = e.target.getAttribute("data-val");
    let latValue = e.target.getAttribute("data-lat");
    let lonValue = e.target.getAttribute("data-lon");

    inputValue !== '' && this.setState({ cities: [...this.state.cities, inputValue] });
    document.getElementById("cityInput").value = "";
    this.setState({ userStartedSearching: false });

    // this.setState({ detailsdata: mapDetails.main.temp });

    //const mapData = inputValue !== '' && $.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latValue + '&lon=' + lonValue + '&APPID=' + key)
    /**
     * Pushing into mapSelectedCordinate value to show mark up in map.
     */

    let cordinateObj = {
      lat: latValue,
      lng: lonValue,
      name: inputValue
    }
    this.setState({ mapSelectedCordinate: [...this.state.mapSelectedCordinate, cordinateObj] })

    /**
     * Initiate Map details api
     */
    let infoMapDetailsObj = {
      lat: latValue,
      lng: lonValue,
      key: '98c355d73f22c6eb33c4bc0bd22031fe'
    }

    dispatch(initiateMapDetails(infoMapDetailsObj))
    mapDetails && mapDetails.main && this.setState({ mapDetailsData: [...this.state.mapDetailsData, mapDetails.main.temp] });
  }

  render() {
    let searchSuggestions = this.state.userSearchedData && this.state.userSearchedData.map((val, index) => {
      return <SearchName key={index} data-lat={val.lat} data-lon={val.lon} data-val={val.name} onClick={this.addCityMarkup.bind(val)}>{val.name}</SearchName>;
    })


    return (
      <Fragment>
        <H1>React Map Api project</H1>
        <Grid>
          <column>
            <SearchSection>
              <InputBox id="cityInput" type="text" onChange={this.doSearch.bind(this)} autoComplete="off" placeholder="Search city ..."/>
              { this.state.userSearchedData !== '' && this.state.userStartedSearching
                && <SearchList id="suggestionSearchList">{searchSuggestions}</SearchList>
              }
            </SearchSection>

          <LabelContainer>
            <Labels>
              {this.state.cities && this.state.cities.map((val, index) => {
                return(
                  <Fragment key={index}>
                    <LabelSpan id={`id${index}`}>{val}</LabelSpan>
                  </Fragment>
                )
              })}
            </Labels>
            <div>
            {
              this.state.mapDetailsData && this.state.mapDetailsData.map((tempval, tempindex) => {
              return (<Fragment key={tempindex}>
                <TempSpan id={`id${tempindex}`}>Temp: {tempval}</TempSpan>
              </Fragment>)
           })}
           </div>
          </LabelContainer>
          </column>
          <column>
            <MapContainer mapSelectedCordinate = {this.state.mapSelectedCordinate} />
          </column>
        </Grid>
        </Fragment>
    )

  }
}

export default HomePage
