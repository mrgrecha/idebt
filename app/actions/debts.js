import {
  AJAX,
  FETCH_DEBTS_I_OWE,
  FETCH_DEBTS_OWE_ME,
  REPAY_DEBTS,
} from '../constants';
import { fetchUserData } from './currentUser.js';

export const fetchDebtsIOwe = () => ({
  type: AJAX,
  payload: {
    url: 'debts/i_owe/',
    method: 'GET',
    ...FETCH_DEBTS_I_OWE,
  },
});

export const fetchDebtsOweMe = () => ({
  type: AJAX,
  payload: {
    url: 'debts/owe_me/',
    method: 'GET',
    ...FETCH_DEBTS_OWE_ME,
  },
});

export const repayDebt = (debtId) => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      url: `debts/${debtId}/repay/`,
      method: 'POST',
      ...REPAY_DEBTS,
    },
  }).then(() => {
    dispatch(fetchUserData());
}));
