import { GetToken } from "../utilities";
import { postData } from "./Services";

export const post = async (
  url,
  params,
  contentType = "application/json",
  resType = null
) => {
  const token = await GetToken();

  const h = {
    headers: {
      "Content-Type": contentType,
    },
  };

  if (resType) {
    h.responseType = resType;
  }

  if (token) {
    h.headers.Authorization = token;
  }

  return await postData.post(url, params, h);
};
