import jwtDecode from "jwt-decode";

const isValidToken = (accessToken) => {
  const decodedToken = jwtDecode(accessToken);
  console.log("decodedToken:", decodedToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const getUserFromLocalStorage = () => {
  const accessToken = localStorage.getItem("user");
  console.log("accessToken:", accessToken);
  if (!accessToken || !isValidToken(accessToken)) {
    console.log("No access token found");
    return null;
  }
  return jwtDecode(accessToken);
};

const TokenService = {
  getUserFromLocalStorage,
};

export default TokenService;
