import { GetToken } from "../utilities";
import { putData } from "./Services";
export const put = async (url, params, contentType = "application/json") => {
  const token = await GetToken();

  const headers = {
    "Content-Type": contentType,
  };

  if (token) {
    headers.Authorization = token;
  }

  return await putData.put(url, params, { headers });
};
