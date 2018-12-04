
import {
  AJAX,
  FETCH_ISSUES,
  FETCH_SUITABLE_OFFERS,
  CHOOSE_ISSUE,
  CREATE_ISSUE,
} from '../constants';

export const fetchIssues = () => (
  {
    type: AJAX,
    payload: {
      url: 'issues/',
      method: 'GET',
      ...FETCH_ISSUES,
    },
  }
);

export const fetchSuitableOffers = (issueId) => ({
  type: AJAX,
  payload: {
    url: `issues/${issueId}/suitable`,
    method: 'GET',
    ...FETCH_SUITABLE_OFFERS,
  },
});

export const chooseIssue = (id) => ({
  type: CHOOSE_ISSUE,
  payload: {
    id: id,
  },
});

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
