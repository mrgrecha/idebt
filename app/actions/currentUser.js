import {
  FETCH_USER_DATA,
  AJAX,
  REPLENISH_BALANCE,
  WITHDRAW_BALANCE,
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

export const replenishBalance = (userId, amount) => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      url: `user/${userId}/balance/replenish/`,
      method: 'POST',
      data: {
        'amount': amount,
      },
      ...REPLENISH_BALANCE,
   },
 }).then(() => {
    dispatch(fetchUserData());
}));

export const withdrawBalance = (userId, amount) => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      url: `user/${userId}/balance/withdraw/`,
      method: 'POST',
      data: {
        'amount': amount,
      },
      ...WITHDRAW_BALANCE,
    },
  }).then(() => {
    dispatch(fetchUserData());
}));