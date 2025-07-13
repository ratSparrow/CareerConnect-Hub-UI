export const setToLocalStorage = ({accessToken, role}) => {

  return localStorage.setItem("userInfo",{accessToken:string, role:string});
};

export const getFromLocalStorage = (key: string) => {

  return localStorage.getItem(key);
};
