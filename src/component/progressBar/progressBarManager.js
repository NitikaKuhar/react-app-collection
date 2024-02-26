import React, { useState } from 'react';
import ProgressBar from './progressBar';

function generateId() {
    // Combine timestamp and random number
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }
const ProgressBarsManager = () => {
    const [progressBars, setProgressBars] = useState([]);
    const [activeLoaders, setActiveLoaders] = useState([]);
  
    /*
    The addProgressBar function adds a new progress bar to the progressBars list. If there are fewer 
    than 5 active loaders, it also starts loading the new progress bar immediately by adding its id to 
    the activeLoaders list.
    */
    const addProgressBar = () =>{
      let generatedId = generateId();
       let newBar = {
          id:generatedId,
          percentFill:20,
          isLoading: activeLoaders.length < 5   
       }
  
       setProgressBars(prevProgressBar => [...prevProgressBar, newBar]);
       if(newBar.isLoading){
        setActiveLoaders(preActiveLoaders => [...preActiveLoaders, newBar.id])
       }
    }
  
    /**
     * 
  The removeProgressBar function removes a progress bar from both the progressBars list and the 
  activeLoaders array.
     */
    const removeProgressBar = (id) =>{
      setProgressBars(prevProgressBar => prevProgressBar.filter(bar => bar.id !== id));
      setActiveLoaders(preActiveLoaders => preActiveLoaders.filter(barId => barId !== id))
    }
  /**
   The handleLoaded function is called when a progress bar completes loading. It removes the completed bar's 
   id from activeLoaders. If there are less than 5 active loaders, it finds the next progress bar that isn't 
   loading and starts its loading process
   */
    const handleLoaded = (id) =>{
      setActiveLoaders((preActiveLoaders)=>{
        const nextActiveLoaders = preActiveLoaders.filter(barId => barId !== id);
  
        //start loading the next bar , if any
        if(nextActiveLoaders.length < 5){
          const nextBarToLoad = progressBars.find(bar => !bar.isLoading && !nextActiveLoaders.includes(bar.id))
          if(nextBarToLoad){
            nextBarToLoad.isLoading = true;
            nextActiveLoaders.push(nextBarToLoad.id)
          }
        }
        return nextActiveLoaders;
      });
    }

    return (
      <div className="App">
        <button onClick={addProgressBar}>Add Progress Bar</button>
        <div className='progress-bar-container'>
          {
            progressBars.map((bar,idx)=>{
              return(
                <ProgressBar 
                  key = {idx}
                  id = {bar.id}
                  shouldStart = {bar.isLoading}
                  onLoaded = {handleLoaded}
                  onRemove = {removeProgressBar}
                
                />
              )
            })
          }
        </div>
      </div>
    );
};

export default ProgressBarsManager;
