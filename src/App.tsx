import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
