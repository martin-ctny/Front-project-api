import React, { useState } from "react";
import AuthService from "./services/auth.user.service";
import axios from "axios";
import "./App.css";

function App() {
  const [emailss, setEmail] = useState("teste1@gmail.com");
  const [passwordss, setPassword] = useState("Sadasdasada12312!!");
  const [name, setName] = useState("Martin");

  const [email, setEmailss] = useState({
    email: "adasd@gmail.com",
    password: "Sasdadzdsdaa12312!!",
    name: "John",
  });

  const handleClick = async () => {
    const url = "http://localhost:3000/auth/signup";
    console.log(email);

    try {
      const response = await axios.post(
        url,
        { email: email.email, password: email.password, name: email.name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // La réponse est disponible dans response.data
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    // fetch http://localhost:3000/
    const url = "http://localhost:3000/auth/signup";
    console.log(email);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      }).then((response) => response.json());

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>dossier sans titre 5</h1>
        <button onClick={handleClick}>Register</button>
        <button onClick={handleLogin}>login</button>
      </header>
    </div>
  );
}

export default App;
