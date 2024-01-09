import { authEmail, authKey } from "../components/Constant/authKey";
import {
  setEmailIdToLocalStorage,
  setToLocalStorage,
} from "../helpers/utils/saveData";

export const storeUserInfo = (verify: string) => {
  return setToLocalStorage(authKey, verify);
};
export const storeUserEmail = (verify: string) => {
  return setEmailIdToLocalStorage(authEmail, verify);
};

export const removeUserToken = (key: string) => {
  return localStorage.removeItem(key);
};
export const removeUserId = (key: string) => {
  return localStorage.removeItem(key);
};
