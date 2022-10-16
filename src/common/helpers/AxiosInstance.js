import Axios from 'axios';
// import {accessToken} from "./sessionKey";

const API_ROOT = `https://insidecrypto.news/api`;

//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

//get data from api
export const getApiData = async (url, param) => {
  let response;
  try {
    response = await instance({
      method: 'GET',
      url: `${url}`,
      params: param,
      // headers: {
      //   // Authorization: `Bearer ${accessToken()}`,
      // },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    return e.response;
  }
  return response;
};
//post data to api
export const postApiData = async (data) => {
  const { url, formData, formikProps } = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      // headers: {
      //   Authorization: `Bearer ${accessToken()}`,
      // },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};


// create form data to upload files
export const postApiFormData = async (fileData) => {
  const { url, formData, requestMethod } = fileData;
  let response;
  try {
    response = await formDataInstance({
      method: `${requestMethod}`,
      url: `${url}`,
      data: formData,
      transformResponse: [function (responseData) {
        //Do what ever you want transform the data
        return JSON.parse(responseData);
      }]
    });
  } catch (e) {
    console.log(e.response)
    return e.response;
  }
  return response;
}

export { API_ROOT };
