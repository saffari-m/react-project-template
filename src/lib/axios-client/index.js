/*global process*/
/*eslint no-undef: "error"*/
import axios, { CancelToken as axiosCancelToken } from "axios";
import { getCookie } from "@utils/cookie";
import { catchAxiosError } from "./axios-error-handler";
import CookieNames from "@enums/cookie-names";

const BaseURL = process.env.API_URL;

const axiosClient = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

const getData = (response) => response.data;

axiosClient.interceptors.response.use(getData, catchAxiosError);

axiosClient.interceptors.request.use((config) => {
  const accessToken = getCookie(CookieNames.Token);

  if (accessToken) {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  } else {
    if (config.headers["Authorization"]) {
      delete config.headers["Authorization"];
    }
  }
  return config;
});

export const CancelToken = axiosCancelToken;
export default axiosClient;
