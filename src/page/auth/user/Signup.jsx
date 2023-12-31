import { MouseEventHandler, useContext, useEffect, useState } from "react";
import AuthService from "../../../services/auth.user.service";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Signup = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleValidate = () => {
    console.log("handleValidate");
    const credentials = {
      firstname,
      lastname,
      email,
      password,
      adresse,
    };
    try {
      AuthService.register(credentials).then((response) => {
        console.log("response", response);
        const updatedCart = {
          ...cart,
          userName: response.createdUser.firstName,
          userId: response.createdUser.id,
        };
        setCart(updatedCart);
      });
      navigate("/ordering");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <input
          type="text"
          placeholder="firtsname"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="adresse"
          onChange={(e) => {
            setAdresse(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={(e) => handleValidate(e)}>Creer le compte</button>
      </form>
    </div>
  );
};

export default Signup;
