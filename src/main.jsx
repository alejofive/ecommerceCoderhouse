import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initFireBase } from "./firebese/config.js";
import "./index.css";

initFireBase();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
