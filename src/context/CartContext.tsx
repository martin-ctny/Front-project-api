import { useState, createContext, useEffect } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const orderData = {
    userName: "",
    description: "",
    price: "0",
    isFinished: false,
    adminId: 1,
    userId: 2,
  };

  const [cart, setCart] = useState(orderData);

  useEffect(() => {}, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
