import {
  FETCH_USER_STATISTICS,
  AJAX,
} from '../constants';

export const fetchUserStatistics = (userId) => ({
  type: AJAX,
  payload: {
    url: `stats/${userId}/`,
    method: 'GET',
    ...FETCH_USER_STATISTICS,
  },
});
