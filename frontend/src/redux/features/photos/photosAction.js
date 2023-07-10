import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { setPhotosData, setPhotosLoading, setPhotosError, setCurrentPage, setCurrentCategory} from "./photosSlice";

export const fetchPhotos = (category=null, page =1) => {
    return async (dispatch) => {
      try {
        dispatch(setPhotosLoading(true));
        const endPoint = category ? `${import.meta.env.VITE_PIXABAY}?category=${category}&page=${page}` : `${import.meta.env.VITE_PIXABAY}?page=${page}`;
        const {data} = await axios.get(endPoint)
        dispatch(setPhotosData(data));
        dispatch(setPhotosLoading(false));
      } catch (error) {
        dispatch(setPhotosError(error.message));
        dispatch(setPhotosLoading(false));
      }
    };
  };

  export const goToPrevPage = (category, currentPage) => {
    return (dispatch) => {
      const prevPage = currentPage - 1;
      dispatch(setCurrentPage(prevPage));
      dispatch(fetchPhotos(category, prevPage));
    };
  };
  export const goToNextPage = (category, currentPage) => {
    return (dispatch) => {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));
      dispatch(fetchPhotos(category, nextPage));
    };
  };

  export const updateCurrentCategory = (category) => {
    return (dispatch) => {
      const currentCategory = category
      dispatch(setCurrentCategory(currentCategory));
    };
  };