import axios from "axios";

const API_KEY = "19b3a4477emsha7d4ff53d336eafp1d1546jsn1da39fe79d91";

const baseUrl = "https://priceline-com-provider.p.rapidapi.com";

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
});

const parseResponse = (response) => {
  return {
    data: response.data,
  };
};

http.interceptors.response.use(
  (response) => {
    return parseResponse(response);
  },
  (error) => {
    console.log("API EXPIRED");
  }
);

export default http;
