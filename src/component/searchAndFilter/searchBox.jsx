import React from 'react';

const Search = ({searchUser}) =>{

    const onChange = (e) => {
        if(e.target.value)
            debounce(searchUser(e.target.value), 2000)
        
            // searchUser(e.target.value)
       
    }

    const debounce = (callback, delay) =>{
        let timer;
        return function() {
            let context = this, args = arguments;
            clearTimeout(timer)
            timer = setTimeout(() =>{
                callback.apply(context, args)
            }, delay)
        }
    }

    return(
        <>
            <input type='text'  placeholder='Search user' onChange={onChange}/>
        </>
    )
}

export default Search