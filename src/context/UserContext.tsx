import { useState, createContext, useEffect } from "react";
import TokenService from "../services/token.service";

const UserContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, [setUser]);

  const getUser = async () => {
    try {
      const userConnected: any = await TokenService.getUserFromLocalStorage();
      setUser(userConnected);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
