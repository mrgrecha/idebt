
import {
  AJAX,
  FETCH_OFFERS,
  CHOOSE_OFFER,
  FETCH_SUITABLE_ISSUES,
  CREATE_OFFER
} from '../constants';

export const fetchOffers = () => ({
  type: AJAX,
  payload: {
    url: 'offers/',
    method: 'GET',
    ...FETCH_OFFERS,
  },
});

export const chooseOffer = (id) => ({
  type: CHOOSE_OFFER,
  payload: {
    id: id,
  },
});

export const fetchSuitableIssues = (offerId) => ({
  type: AJAX,
  payload: {
    url: `offers/${offerId}/suitable`,
    method: 'GET',
    ...FETCH_SUITABLE_ISSUES,
  },
});

export const createOffer = data => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      data,
      url: 'offers/',
      method: 'POST',
      ...CREATE_OFFER,
    },
  })
);
