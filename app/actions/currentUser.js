import {
  FETCH_USER_DATA,
  AJAX,
} from '../constants';

export const fetchUserData = () => (
   {
    type: AJAX,
    payload: {
      url: 'user/me.json',
      method: 'GET',
      ...FETCH_USER_DATA,
    },
  }
);
