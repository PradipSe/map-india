/**
 * Whatever we are selecting from state, make sure to make an entry
 * and pickup the store from here to handle performance of redux store.
 */
import { createSelector } from "reselect";

export const selectState = () => state => state;
/**
 * Map info selection from state
 */
export const mapInfoSelector = () =>
  createSelector(
    selectState(),
    listingInfo => listingInfo.listingInfo
  );

/**
 * Map detail selection from state
 */
export const mapDetailSelector = () =>
  createSelector(
    selectState(),
    listingInfo => listingInfo.listingInfo && listingInfo.listingInfo.mapDetails
  );
