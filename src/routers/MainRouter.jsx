import { Route, Routes } from "react-router-dom";
import Signin from "../page/auth/user/Signin";
import Signup from "../page/auth/user/Signup";
import Home from "../page/Home";
import Order from "../page/order/Order";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/ordering" element={<Order />} />
      </Routes>
    </>
  );
};

export default MainRouter;
