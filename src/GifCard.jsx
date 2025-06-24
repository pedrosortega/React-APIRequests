=import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";

const GIPHY_API_KEY = "ktJr7BVC2NkuHL6VwDNNFoBwRRZeWgQl";

const App = () => {
  const [gifs, setGifs] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}
      );
      setGifs(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching GIFs", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Trending GIFs</h1>
      <p>{gifs.length} gifs loaded</p>
      <div>
        {gifs.map((gif) => (
          <div className="gif-card" key={gif.id}>
            <img src={gif.images.original.url} alt="gif" />
          </div>
        ))}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
