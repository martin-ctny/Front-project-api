import axios from "axios";

const API_URL = "http://localhost:3000/user-auth/";

const register = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}signup`,
      {
        email: credentials.email,
        password: credentials.password,
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        adresse: credentials.adresse,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (email) => {
  console.log(email);
  try {
    const response = await axios.get("http://localhost:3000/", {});

    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête de connexion :", error);
    throw error; // Vous pouvez propager l'erreur ou la gérer selon vos besoins
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
