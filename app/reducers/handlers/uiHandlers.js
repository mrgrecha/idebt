import { CLOSE_ERROR_MODAL, REPAY_DEBTS } from '../../constants';

export default {
  [CLOSE_ERROR_MODAL]: (state) => state.set('errorModal', {visible: false, text: ''}),
  [REPAY_DEBTS.ERROR]: (state, action) => state.set('errorModal', {visible: true, text: action.payload.message}),
};
