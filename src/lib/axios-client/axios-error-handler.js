/*global process*/
/*eslint no-undef: "error"*/
import axiosClient from "./index";
import { getCookie, setCookie } from "@utils/cookie";

const RefreshToken_URL = `${process.env.API_URL}/shenaseh/api/${process.env.SHENASEH_VERSION}/token/refresh`;
const AuthApi = {
  refreshToken: (params) => axiosClient.post(RefreshToken_URL, params),
};

const refreshTokenHandler = async (error) => {
  const originalRequest = error.config;
  let accessToken = getCookie("token");

  if (!accessToken) {
    return Promise.reject(error);
  }

  if (!originalRequest._retry) {
    originalRequest._retry = true;
    return AuthApi.refreshToken({
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((res) => {
      const { access_token, exp } = res;
      if (access_token && exp) {
        setCookie("token", access_token);
        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

        // TODO: Check if axios is needed to reset the client header or not!
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        console.log("Access token refreshed!");
      }
      return axiosClient(originalRequest);
    });
  } else {
    return Promise.reject(error?.response?.data || error?.response);
  }
};

const catchAxiosError = (error) => {
  const status = error?.response ? error?.response.status : null;

  if (error?.response) {
    if (status === 401) {
      return refreshTokenHandler(error);
    }

    if (status === 404) {
      // todo: rewire response for apis that not found
      return Promise.reject({ status: status, ...error?.response?.data });
    }

    if (status === 500) {
      return null;
    }
  } else if (error.request) {
    return Promise.reject(error.message);
  } else {
    console.log("Error", error.message);
  }

  return Promise.reject(error?.response?.data || error?.response);
};

export { catchAxiosError };
