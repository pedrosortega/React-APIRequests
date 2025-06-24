import React from "react";
import { createRoot } from "react-dom/client";

// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import GifCard from "./GifCard";

// const GIPHY_API_KEY = "YOUR_API_KEY";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <GifCard />
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
