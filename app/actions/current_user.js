import { SIGN_IN, SIGN_OUT } from "../constants";
import { clearDataInStorage } from '../helpers/storage';

export const signIn = () => ({
	type: SIGN_IN,
});

export const signOut = () => {
	return (dispatch) => {
		clearDataInStorage().then((e) => {
			dispatch({type: SIGN_OUT});
		});
	};
};
