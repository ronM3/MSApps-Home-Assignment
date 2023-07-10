import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {
      page: 0,
      totalItems: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
      items: [],
    },
    loading: false,
    error: null,
    currentPage:1,
    currentCategory: null
  };

  const photosDisplaySlice = createSlice({
    name: 'photosDisplay',
    initialState,
    reducers: {
      setPhotosData: (state, action) => {
        state.data = action.payload;
      },
      setPhotosLoading: (state, action) => {
        state.loading = action.payload;
      },
      setPhotosError: (state, action) => {
        state.error = action.payload;
      },
      setCurrentPage: (state, action) =>{
        state.currentPage = action.payload
      },
      setCurrentCategory: (state, action) =>{
        state.currentCategory = action.payload
      }
    },
  });

export const {setPhotosData, setPhotosLoading, setPhotosError, setCurrentPage, setCurrentCategory} = photosDisplaySlice.actions;
export default photosDisplaySlice.reducer;