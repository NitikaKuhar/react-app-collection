import React, {useEffect} from 'react';
import {useSelector, useDispatch} from'react-redux';
import { setAtcive } from './imageSlice';

const ImageList = ({url, currIndex, index}) =>{
    const dispatch = useDispatch();
    const isActive = useSelector((state) => state.imageSlider.isActive)
   
    useEffect(()=>{
        let activeState = currIndex === index
        dispatch(setAtcive(activeState))
    },[currIndex])
    return(
        <div className={`image-slide ${isActive ? 'active' : ' '}`}>
            <img src={url} alt={`Image ${index}`}/>
        </div>
    )
}

export default ImageList;