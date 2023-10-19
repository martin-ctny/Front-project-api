import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../style/bottomCart.css";
const BottomCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="bottom">
      <button className="validateButton">
        {" "}
        Valider votre panier - {cart.price} €
      </button>
    </div>
  );
};

export default BottomCart;
