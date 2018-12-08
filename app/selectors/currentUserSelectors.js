export const currentUserAuthTokenSelector = state => state.currentUser.authToken;
export const currentUserLoadedSelector = state => state.currentUser.isLoaded;
export const currentUserDataSelector = state => state.currentUser.data;
export const currentUserIdSelector = state => state.currentUser.data.id;
