import { postWeatherData } from "./Services";

export const weatherPost = async (
  url,
  params,
  contentType = "application/json",
  resType = null
) => {
  const h = {
    headers: {
      "Content-Type": contentType,
    },
  };

  if (resType) {
    h.responseType = resType;
  }

  h.headers.Authorization = "Basic d2F0ZWVuOndAdGVlbiQyM0AyMF81NV8xNA==";

  return await postWeatherData.post(url, params, h);
};
