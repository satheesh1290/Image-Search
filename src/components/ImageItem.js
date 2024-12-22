import React from "react";

const ImageItem = ({ image }) => {
  return (
    <div style={{ margin: "10px" }}>
      <a href={image.links.html} target="_blank" rel="noopener noreferrer">
        <img
          src={image.urls.small}
          alt={image.description || "Unsplash Image"}
        />
      </a>
    </div>
  );
};

export default ImageItem;
