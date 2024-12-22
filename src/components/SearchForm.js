import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { setImages, setLoading, setError } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, per_page: 12 },
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
          },
        }
      );
      console.log(response.data.results);
      const imagesWithSize = response.data.results.map((image) => ({
        ...image,
        urls: {
          ...image.urls,
          small: `${image.urls.small}&w=200&h=200&fit=crop`,
        },
      }));
      setImages(imagesWithSize);
      navigate("/gallery");
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
