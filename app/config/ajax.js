import { BASE_API_URL, AJAX } from '../constants';
import store from './store';

const axios = require('axios');

const ajax = ({ dispatch }) => next => (action) => {
  if (action.type !== AJAX) {
    return next(action);
  }
  const { payload } = action;
  const versionOfAPI = payload && payload.version || 'v1';
  const requestURL = `${`${BASE_API_URL}api/${versionOfAPI}`}/${payload.url}`;
  const payloadMethod = payload && payload.method || 'get';
  const data = payload.data || {};
  const handleStart = () => { dispatch({ type: payload.PENDING }); };

  // Currently I fetch auth token from redux store as faced strange things with async storage( I cannot fetch data from it before request as it is async. I've tried different ways but nothing helped)
  const token = store.getState().currentUser.authToken;

  const handleError = (error) => {
    console.log('Error data: ', error.data);
    dispatch({ type: payload.ERROR, payload: error.data });
  };

  const handleSuccess = (response) => {
    console.log('success: ', response);
    console.log('payload: ', payload);
    dispatch({ type: payload.SUCCESS, response });
    return next(action);
  };
  console.log({
    method: payloadMethod,
    url: requestURL,
    data,
    token,
  });

  handleStart();
  const params = {
    method: payloadMethod,
    url: requestURL,
    data,
    headers: {},
  };

  if (token) {
    params.headers['Authorization'] = `Bearer ${token}`;
  }
  return axios(params).then((response) => {
    console.log('response: ', response);

    if (response.status === 401) {
      // TO DO add handling auth error
    }
    if (response.status >= 300) {
      handleError(`Error ${response.status}: ${response.statusText}`, response);
    } else {
      handleSuccess(response.data);
      return response;
    }
  }).catch((error) => {
    handleError(error.response);
  });
};


export default ajax;
