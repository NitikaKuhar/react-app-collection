import {configureStore} from'@reduxjs/toolkit';
import imageReducer from './imageSlice';

export const store = configureStore({
    reducer:{
        imageSlider:imageReducer
    }
})