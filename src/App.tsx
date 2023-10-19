import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import { UserProvider } from "./context/UserContext";
import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
