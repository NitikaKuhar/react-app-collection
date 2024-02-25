import React from 'react';

const Arrow = ({handleClick, direction}) =>{
    return(
        <div className={`arrow ${direction}`} onClick={handleClick}>
            {direction === 'left' ? "<" : ">"}
        </div>
    )
}

export default Arrow;