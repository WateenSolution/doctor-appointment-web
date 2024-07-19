import axios from "axios";
import store from "../../redux/store/store";
import { BASE_URL } from "./endpoints";

const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 sec wait
});

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config) => {
      const { userToken } = store.getState()?.auth;
      if (userToken) {
        config.headers.authorization = `${userToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
};

export { HTTP_CLIENT, setupAxios };
