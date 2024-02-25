import React, {useEffect} from 'react';
import {useSelector, useDispatch} from'react-redux';
import { prevSlide, nexSlide, loadImage, setCurrSlide } from './imageSlice';
import ImageList from './imageList';
import Arrow from './arrow';

const ImageCarousel = ({imagesList}) =>{
   
    // const [curr, setCurr] = useState(0);
    const dispatch = useDispatch();
    const images = useSelector((state) => state.imageSlider.imageList)
    const currImage = useSelector((state) => state.imageSlider.currImage)

    const loadImages = () =>{
        dispatch(loadImage(imagesList));
        dispatch(setCurrSlide(0))
    }
    useEffect(()=>{
        loadImages();
    },[])
  
    const goPrev = () =>{
        let currIdx = currImage === 0 ? images.length-1 : currImage - 1;
        dispatch(setCurrSlide(currIdx));
        dispatch(prevSlide(currIdx));
    }

    const goNext = () =>{
        let currIdx = currImage === images.length-1 ? 0 : currImage + 1;
        dispatch(setCurrSlide(currIdx));
        dispatch(nexSlide(currIdx));
    }

    return(
        <div className='image-carousel'>
            <Arrow direction="left" handleClick={goPrev}/>
            <Arrow direction="right" handleClick={goNext}/>
            {
                images.length && images.map((image, idx) =>{
                    return (
                        <ImageList key={idx} url={image} currIndex = {currImage} index={idx}/>
                    )
                })
            }
        </div>
    )
}

export default ImageCarousel;