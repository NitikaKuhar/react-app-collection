import React  from'react';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currSlide: 0,
    imageList:[],
    isActive:0
};

const imageSlice = createSlice({
    name:'imageSlider',
    initialState,
    reducers:{
        loadImage:(state,action) =>{
            state.imageList = action.payload;
        },
        prevSlide:(state, action) =>{
            state.currSlide = action.payload;
        },
        nexSlide:(state, action) =>{
            state.currSlide = action.payload;
        },
        setAtcive:(state, action) =>{
            state.isActive = action.payload;
        },
        setCurrSlide:(state, action) =>{
            state.currSlide = action.payload;
        }
    }
});

export const {prevSlide, nexSlide, loadImage, setAtcive, setCurrSlide} = imageSlice.actions;
export default imageSlice.reducer;