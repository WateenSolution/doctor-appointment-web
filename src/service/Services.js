import axios from "axios";
import { BASE_URL, WEATHER_BASE_URL } from "../utilities";

export const getData = axios.create({
  baseURL: BASE_URL,
  method: "GET",
});

export const postData = axios.create({
  baseURL: BASE_URL,
  method: "POST",
});

export const putData = axios.create({
  baseURL: BASE_URL,
  method: "PUT",
});

export const deleteData = axios.create({
  baseURL: BASE_URL,
  method: "DELETE",
});

export const postWeatherData = axios.create({
  baseURL: WEATHER_BASE_URL,
  method: "POST",
});
