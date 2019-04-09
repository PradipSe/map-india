import {
  LISTING_FAILURE,
  LISTING_REQUEST,
  LISTING_SUCCESS,
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
} from "./actionType";

export function failureMapApi(error) {
  return {
    type: LISTING_FAILURE,
    error
  };
}

export function requestMapApi() {
  return {
    type: LISTING_REQUEST
  };
}

export function receiveMapApi(authResponse) {
  return {
    type: LISTING_SUCCESS,
    listingInfo: authResponse
  };
}

export function failureMapDetailsApi(error) {
  return {
    type: DETAILS_FAILURE,
    error
  };
}

export function requestMapDetailsApi() {
  return {
    type: DETAILS_REQUEST
  };
}

export function receiveMapDetailsApi(authResponse) {
  return {
    type: DETAILS_SUCCESS,
    mapDetails: authResponse
  };
}
