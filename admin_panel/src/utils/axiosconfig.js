const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

  const token = getTokenFromLocalStorage ? getTokenFromLocalStorage.token.token : "";

export const config = {
  headers: {
    Authorization: `Bearer ${token}`, 
    Accept: "application/json",
  },
};