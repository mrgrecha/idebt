import {
  FETCH_STATISTICS,
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
