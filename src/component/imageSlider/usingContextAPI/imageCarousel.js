import React, {useState, useEffect} from 'react';
import ImageList from './imageList';
import Arrow from './arrow';
import {useImageSlider} from './sliderContext';

const ImageCarousel = ({imagesList}) =>{
    const [images , setImages] = useState([]);

    const {currIndex, gotToPrev, gotToNext} = useImageSlider();

    useEffect(()=>{
        setImages(imagesList);
    },[]);

    return(
        <div className='image-carousel'>
            <Arrow direction="left" handleClick={() => gotToPrev(imagesList.length)}/>
            <Arrow direction="right" handleClick={() => gotToNext(imagesList.length)}/>
            {
                images.length && images.map((image, idx) =>{
                    return (
                        <ImageList key={idx} url={image} currIndex = {currIndex} index={idx}/>
                    )
                })
            }
        </div>
    )
}

export default ImageCarousel;