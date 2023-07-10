import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './redux/features/photos/photosSlice';

export const store = configureStore({
  reducer: {
    photosState: photosReducer,
  }
});



