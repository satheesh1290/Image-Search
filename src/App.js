import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import ImageGallery from "./components/ImageGallery";
import LoadingIndicator from "./components/LoadingIndicator";

const AppContext = createContext();

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider
      value={{ images, setImages, loading, setLoading, error, setError }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SearchBox />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
