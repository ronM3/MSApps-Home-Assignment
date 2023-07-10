import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchPhotos, updateCurrentCategory,} from "../redux/features/photos/photosAction";
import "../assets/styles/modal.css";
import { SELECT_CATEGORY } from "../../public/constants-strings";

export const TypeSelectModal = ({ setOpenModal, selectedPhoto }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setOpenModal]);

  const handleCategorySelection = (category) => {
    dispatch(updateCurrentCategory(category));
    dispatch(fetchPhotos(category));
    setOpenModal(false);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div ref={modalRef} className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={handleModalClose}>X</button>
        </div>
        <div className={`title ${selectedPhoto ? "info" : "category"}`}>
          <h1>{selectedPhoto ? "More info" : SELECT_CATEGORY}</h1>
        </div>
        <div className="body">
          {selectedPhoto ? (
            <div className="parameter-details">
              <p><span>Views:</span> {selectedPhoto.views}</p>
              <p><span>Downloads:</span> {selectedPhoto.downloads}</p>
              <p><span>Collection: </span>{selectedPhoto.collections}</p>
              <p><span>Likes: </span>{selectedPhoto.likes}</p>
            </div>
          ) : (
            <div className="category-buttons">
              {["", "backgrounds", "fashion", "nature", "science", "animals", "education", "feelings", "health", "food",].map((category) => (
                <button key={category} className="category_button" onClick={() => handleCategorySelection(category)}>
                  {category ? category : "All"}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="modal_footer">
          <button onClick={handleModalClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
