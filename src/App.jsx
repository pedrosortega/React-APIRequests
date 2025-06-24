import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";

const GIPHY_API_KEY = "aAXJQI3cUJuaNhecvZC8rsL6p5jy1uPd";

const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

const getGifs = () => {
  const [gifs, setGifs] = useState([]);

  const fetchGifData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data.data);
    setGifs(data.data);
  };
  useEffect(() => {
    fetchGifData();
  }, []);

  return (
    <div>
      <ul>
        <li>{gifs.map}</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      {getGifs()};
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
