import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    console.log("cart", cart);
    console.log("product, ", product);
  }, []);
  useEffect(() => {
    console.log("nouveau cart", cart);
  }, [cart]);

  const handleClick = () => {
    const productPrice = parseFloat(product.price);

    const updatedCart = {
      ...cart,
      price: (parseFloat(cart.price) + productPrice).toString(),
    };

    updatedCart.description = cart.description + ` + ${product.name}`;

    setCart(updatedCart);

    console.log("product added to cart");
  };

  return (
    <div className="add-to-cart">
      <button className="add-to-cart__btn" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
