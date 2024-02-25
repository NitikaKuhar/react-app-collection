import React, {useState, useEffect} from 'react';

const ImageList = ({url, currIndex, index}) =>{
    const [isActive, setIsActive] = useState(false)
    useEffect(()=>{
        setIsActive(currIndex === index)
    },[currIndex])
    return(
        <div className={`image-slide ${isActive ? 'active' : ' '}`}>
            <img src={url} alt={`Image ${index}`}/>
        </div>
    )
}

export default ImageList;