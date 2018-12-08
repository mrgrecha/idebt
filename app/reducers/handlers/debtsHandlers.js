import {
  FETCH_DEBTS_I_OWE,
  FETCH_DEBTS_OWE_ME,
} from '../../constants';

export default {
  [FETCH_DEBTS_I_OWE.SUCCESS]: (state, action) => state.set('debtsIOwe', action.response.results),
  [FETCH_DEBTS_OWE_ME.SUCCESS]: (state, action) => state.set('debtsOweMe', action.response.results),
};
