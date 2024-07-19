import { GetToken } from "../utilities";
import { deleteData, putData } from "./Services";
export const del = async (url, contentType = "application/json") => {
  const token = await GetToken();

  const headers = {
    "Content-Type": contentType,
  };

  if (token) {
    headers.Authorization = token;
  }

  return await deleteData.delete(url, { headers });
};
