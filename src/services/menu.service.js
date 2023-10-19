import axios from "axios";

const API_URL = "http://localhost:3000/menu/";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("user");
};

const getMenus = async () => {
  try {
    const accessToken = getTokenFromLocalStorage();

    if (!accessToken) {
      console.error("Token introuvable dans le stockage local.");
      return null;
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête de connexion :", error);
    throw error;
  }
};

const MenuService = {
  getMenus,
};

export default MenuService;
