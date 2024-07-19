import { GetToken } from "../utilities";
import { getData } from "./Services";

export const get = async (url, contentType = "application/json") => {
  const token = await GetToken();

  const headers = {
    "Content-Type": contentType,
  };

  if (token) {
    headers.Authorization = token;
  }

  return await getData.get(url, { headers });
};
