import React, {useState, useEffect} from 'react';
import ImageList from './imageList';
import Arrow from './arrow';

const ImageCarousel = ({imagesList}) =>{
    const [images , setImages] = useState([]);
    const [curr, setCurr] = useState(0);

    useEffect(()=>{
        // console.log(imagesList)
        setImages(imagesList);
    },[])

    const prevSlide = () =>{
        setCurr(curr === 0 ? images.length-1 : curr - 1)
    }

    const nextSlide = () =>{
        setCurr(curr === images.length-1 ? 0 : curr + 1)
    }

    return(
        <div className='image-carousel'>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            {
                images.length && images.map((image, idx) =>{
                    return (
                        <ImageList key={idx} url={image} currIndex = {curr} index={idx}/>
                    )
                })
            }
        </div>
    )
}

export default ImageCarousel;