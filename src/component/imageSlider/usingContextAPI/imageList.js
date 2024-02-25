import React, {useEffect, useState} from 'react';
import {useImageSlider} from './sliderContext';

const ImageList = ({url, currIndex, index}) =>{
    // const {setIsActive, isActive} = useImageSlider();
    const [isActive, setIsActive] = useState(false)
    useEffect(()=>{
        setIsActive(currIndex === index);
    },[currIndex])
    return(
        <div className={`image-slide ${isActive ? 'active' : ' '}`}>
            <img src={url} alt={`Image ${index}`}/>
        </div>
    )
}

export default ImageList;