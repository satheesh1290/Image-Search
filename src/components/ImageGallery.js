import React, { useContext } from "react";
import { AppContext } from "../App";
import ImageItem from "./ImageItem";
import LoadingIndicator from "./LoadingIndicator";
import SearchForm from "./SearchForm";

const ImageGallery = () => {
  const { images, loading, error } = useContext(AppContext);

  return (
    <div>
      <SearchForm />
      {loading && <LoadingIndicator />}
      {error && <div>Error: {error}</div>}
      {images.length === 0 && !loading && <div>No images found.</div>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "10px",
          margin: "10px",
        }}
      >
        {images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
