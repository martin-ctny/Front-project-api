import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handkleSignup = () => {
    navigate("/signup");
  };

  const handlelogin = () => {
    navigate("/signin");
  };

  return (
    <div className="home">
      <button onClick={handkleSignup}>S'incrire</button>
      <button className="login" onClick={handlelogin}>
        se connecter
      </button>
    </div>
  );
};

export default Main;
