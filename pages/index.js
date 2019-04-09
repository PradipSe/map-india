import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { mapInfoSelector, mapDetailSelector } from "../selectors";
import { createStructuredSelector } from "reselect";
import { initiateMapApi } from "../actions/app/actionCreator";
import HomePage from "../components/homepage";

class MainApp extends Component {
  constructor() {
    super();
  }

  static async getInitialProps({ store }) {
    /**
     * Dispatching api listing data to redux store, this will serve for both
     * server and client side, on the client side it will behave as componentDidMount().
     */
    await store.dispatch(initiateMapApi());
  }

  render() {
    /**
     * Getting candidate info listing data from redux store.
     */
    const { mapInfo, dispatch, mapDetail } = this.props;
    const mapInfoData = mapInfo && mapInfo.listingInfo && mapInfo.listingInfo.data
    const mapDetailsData = mapDetail && mapDetail.data
    return (
      <Fragment>
        <HomePage mapData={mapInfoData} dispatch={dispatch} mapDetails={mapDetailsData} />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  mapInfo: mapInfoSelector(),
  mapDetail: mapDetailSelector()
});

export default connect(mapStateToProps)(MainApp);
