import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../../style/bottomCart.css";
const BottomCart = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleNavigate = () => {
    navigate("/validate-order");
  };

  return (
    <div className="bottom">
      <button onClick={handleNavigate} className="validateButton">
        Valider votre panier - {cart.price} €
      </button>
    </div>
  );
};

export default BottomCart;
