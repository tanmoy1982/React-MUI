import { configureStore } from '@reduxjs/toolkit';
import blogreducer from './blogSlice';

export const store = configureStore({
  reducer: {
    blog : blogreducer,
  },
})