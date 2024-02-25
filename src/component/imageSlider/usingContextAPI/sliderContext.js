import React, {createContext, useState, useContext} from 'react';

const ImageSliderContext = createContext();

export const ImageSliderProvider = ({children}) =>{
    const [currIndex, setCurrIndex] = useState(0);
    // const [isActive, setIsActive] = useState(false);

    const gotToPrev = (totalImages) =>{
        let curr = currIndex < 0  ? totalImages-1 : currIndex  - 1;
        setCurrIndex(curr);
    }

    const gotToNext = (totalImages) =>{
        let curr = currIndex === totalImages-1 ? 0 : currIndex + 1;
        setCurrIndex(curr);
    }
    return(
        <ImageSliderContext.Provider value={{currIndex, gotToNext, gotToPrev}}>
            {children}
        </ImageSliderContext.Provider>
    )
}

export const useImageSlider = () => useContext(ImageSliderContext);