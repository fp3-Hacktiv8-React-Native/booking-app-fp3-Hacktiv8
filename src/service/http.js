import axios from "axios";

const API_KEY = "93ad0fb362mshf67be92eede3a50p1c74cejsn7088d365ba1e";

const baseUrl = process.env.REACT_APP_BASE_API_URL;

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
