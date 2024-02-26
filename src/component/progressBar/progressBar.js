import React, { useState, useEffect } from 'react';

const ProgressBar = ({id, shouldStart,onLoaded,onRemove}) => {
    const [width ,setWidth] = useState(0)

    useEffect(() => {
      let interval = null;
  
      if (shouldStart) {
        interval = setInterval(() => {
          setWidth((prevWidth) => {
            const nextWidth = prevWidth + 20;
            if (nextWidth >= 100) {
              clearInterval(interval);
              // This setState is async and won't cause the error you mentioned
              return 100;
            }
            return nextWidth;
          });
        }, 1000);
      }
  
      // Clean up the interval on unmount
      return () => clearInterval(interval);
    }, [shouldStart]);
  
    // Notify parent component that the bar has loaded
    useEffect(() => {
      if (width === 100) {
        // Use a timeout to ensure state updates are not synchronous with rendering
        setTimeout(() => onLoaded(id), 0);
      }
    }, [width, id, onLoaded]);
  
  
    return(
      // <div className='bar-container'>
      //     <div className='bar' style={{width:`${bar.percentFill}%`, backgroundColor:'red'}}></div>
      // </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ width: '200px', height: '20px', border: '1px solid black', marginRight: '5px' }}>
          <div style={{ height: '100%', background: 'blue', width: `${width}%`, transition: 'width 0.5s' }} />
        </div>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    )
};

export default ProgressBar;