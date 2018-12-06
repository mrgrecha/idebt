
import {
  AJAX,
  FETCH_DEBTS_I_OWE,
} from '../constants';

export const fetchDebtsIOwe = () => (
  {
    type: AJAX,
    payload: {
      url: 'debts/i_owe/',
      method: 'GET',
      ...FETCH_DEBTS_I_OWE,
    },
  }
);
