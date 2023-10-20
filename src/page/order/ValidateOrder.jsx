import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import OrderService from "../../services/order.service";

const ValidateOrder = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    console.log("handleClick");
    try {
      OrderService.createOrder(cart).then((response) => {
        console.log("response", response);

        window.location.href =
          "https://github.com/cmoileo/caisse-en-nest#roadmap";
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("cart", cart);
  }, []);
  return (
    <div>
      <h2>Produits :</h2>
      <p>{cart.description}</p>
      <h2>total a payer :</h2>
      <p>{cart.price} €</p>
      <button onClick={handleClick}>payer</button>
    </div>
  );
};

export default ValidateOrder;
