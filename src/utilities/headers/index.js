import store from "../../redux/store/store";

export let GetToken = async () => {
  const userToken = await localStorage.getItem("token");
  return userToken;
};
