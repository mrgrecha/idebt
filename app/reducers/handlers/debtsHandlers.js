import {
  FETCH_DEBTS_I_OWE,
} from '../../constants';

export default {
  [FETCH_DEBTS_I_OWE.SUCCESS]: (state, action) => state.set('debtsIOwe', action.response.results),
};
