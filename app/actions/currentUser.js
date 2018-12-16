import {
  FETCH_USER_DATA,
  AJAX,
  REPLENISH_BALANCE,
  WITHDRAW_BALANCE,
  UPDATE_PASSWORD,
  UPDATE_USER_DATA,
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

export const updateUserData = (data) => ({
  type: AJAX,
  payload: {
    data,
    url: `user/${data.id}/`,
    method: 'PATCH',
    ...UPDATE_USER_DATA,
  },
});

export const replenishBalance = (userId, amount) => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      url: `user/${userId}/balance/replenish/`,
      method: 'POST',
      data: {
        'amount': amount,
        'currency': 'USD',
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
        'currency': 'USD',
      },
      ...WITHDRAW_BALANCE,
    },
  }).then(() => {
    dispatch(fetchUserData());
}));

export const updatePassword = (userId, data) => ({
  type: AJAX,
  payload: {
    url: `user/${userId}/set_password/`,
    method: 'POST',
    data: data,
    ...UPDATE_PASSWORD,
  },
});
