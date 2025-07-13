import { decodedToken } from "../helpers/utils/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../helpers/utils/saveData";

export const storeUserInfo = ({ accessToken, role }: { accessToken: string, role:string }) => {
  return setToLocalStorage({accessToken, role});
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getUserToken = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    return authToken;
  } else {
    return "";
  }
};
