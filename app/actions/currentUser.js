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
  {
    type: AJAX,
    payload: {
      url: `user/${userId}/balance/replenish/`,
      method: 'GET',
      data: {
        amount: amount,
      },
      ...REPLENISH_BALANCE,
   },
 }
);

export const withdrawBalance = (userId, amount) => ({
  type: AJAX,
  payload: {
    url: `user/${userId}/balance/withdraw/`,
    method: 'GET',
    data: {
      amount: amount,
    },
    ...WITHDRAW_BALANCE,
  },
});
