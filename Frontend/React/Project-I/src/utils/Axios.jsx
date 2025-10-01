import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com",
});

// const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log("Request --->", config);
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);





// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("Response <---", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
