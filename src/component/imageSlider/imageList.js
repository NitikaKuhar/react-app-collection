import React from 'react';


const ImageList = ({url, title}) =>{

    return(
        <div className='images'>
            <img src={url} alt={title} className="image">
            </img>
            <div className='title'>{title}</div>

        </div>
    )
}

export default ImageList;