import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Card /> */}
    <Navbar />
  </React.StrictMode>
);
