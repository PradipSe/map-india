import axios from "axios";
import * as action from "./action";
import { API_ENDPOINT_URL, API_ENDPOINT_WEATHER } from "../../global.config";

/**
 * @function initiateMapApi
 * @description Will initiate map api listing from endpoint to store in global redux store.
 */
export function initiateMapApi() {
  return dispatch => {
    dispatch(action.requestMapApi());
    return axios.get(API_ENDPOINT_URL).then(
      json => {
        if (json.status === 200 && json.data && !json.data.error) {
          dispatch(action.receiveMapApi(json.data));
        } else {
          dispatch(action.failureMapApi(json.data.error));
        }
      },
      err => {
        dispatch(action.failureMapApi(err));
      }
    );
  };
}

export function initiateMapDetails(infoObj) {
  return dispatch => {
    dispatch(action.requestMapDetailsApi());
    return axios.get(`${API_ENDPOINT_WEATHER}?lat=${infoObj.lat}&lon=${infoObj.lng}&APPID=${infoObj.key}`).then(
      json => {
        if (json.status === 200 && json.data && !json.data.error) {
          console.log('JSON: ', json.data);
          dispatch(action.receiveMapDetailsApi(json.data));
        } else {
          console.log('else')
          dispatch(action.failureMapDetailsApi(json.data.error));
        }
      },
      err => {
        console.log('errror')
        dispatch(action.failureMapDetailsApi(err));
      }
    );
  };
}
