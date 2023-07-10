import React from "react";
import "../assets/styles/imageCard.css";
const Item = ({ photo, handlePhotoClick }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    handlePhotoClick(photo);
  };
  
  return (
    <div className="photo-item" onClick={handleClick}>
      <div className="photo-overlay">
        <img src={photo.largeImageURL} alt={photo.title} />
        <div className="photo_user">Author: {photo.user}</div>
        <div className="photo-name">{photo.tags}</div>
      </div>
    </div>
  );
};

export default Item;
