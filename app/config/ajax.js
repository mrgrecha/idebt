import { BASE_API_URL, AJAX } from '../constants';

const axios = require('axios');

const ajax = ({ dispatch }) => next => action => {
  if (action.type !== AJAX) {
    return next(action);
  }
  const { payload, meta } = action;
  const versionOfAPI = payload && payload.version || 'v1';
  const requestURL = payload.requestUrl ? payload.requestUrl : BASE_API_URL + versionOfAPI + '/' + payload.url;
  const payloadMethod = payload && payload.method || 'get';

  const handleStart = () => { dispatch({type: payload.PENDING, meta}); }

  const handleError = (error, errorData) => {
    dispatch({type: payload.ERROR, meta, payload: error.data});
    throw error;
  };

  const handleSuccess = response => {
    dispatch({type: payload.SUCCESS, meta, response});
    return next(action);
  };

  handleStart();
  return axios({
    method: payloadMethod,
    url: requestURL,
    data: payload.params,
    // TO DO Add auth
    // headers: {
    //   'Authorization': localStorage.getItem('jwt_token'),
    // }
  }).then(response => {
    if (response.status === 401) {
      window.location.href = BASE_FRONTEND_URL + 'auth/sign_in';
    }
    if (response.status >= 300) {
        handleError(`Error ${response.status}: ${response.statusText}`, response);
    } else {
      handleSuccess(response.data);
      return response;
    }
  }).catch(error => {
    handleError(error.response)
  });
};

export default ajax;
