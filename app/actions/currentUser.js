import {
  FETCH_STATISTICS,
  CREATE_ISSUE,
  CREATE_OFFER,
  AJAX,
} from '../constants';

export const fetchStatistics = () => (
   {
    type: AJAX,
    payload: {
      url: 'user/me.json',
      method: 'GET',
      ...FETCH_STATISTICS,
    },
  }
);

export const createIssue = data => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      data,
      url: 'issues/',
      method: 'POST',
      ...CREATE_ISSUE,
    },
  })
);

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

