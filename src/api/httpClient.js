import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});
const errorInterceptor = error => {
  // all the error responses
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message);
      break;

    // case 401:
    //     console.log( 'Please login again', 'Session Expired');
    //     break;

    default:
      console.error(error.response.status, error.message);
  }
  return Promise.reject(error);
};
const responseInterceptor = response => {
  switch (response.status) {
    case 200:
      // yay!
      console.log("success", response.status);
      break;
    // any other cases
    default:
      console.log(response.status);
    // default case
  }

  return response;
};
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
