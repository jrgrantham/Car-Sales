import * as actionTypes from './actionTypes';

export const removeFeature = item => {
  // dispatch an action here to remove an item
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item,
  }
};

export const buyItem = item => {
  // dipsatch an action here to add an item
  return {
    type: actionTypes.BUY_ITEM,
    payload: item,
  }
};
