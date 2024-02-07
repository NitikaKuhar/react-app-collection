import React from 'react';

const Suggestions = ({suggestionList, selectUser}) =>{

    const onSelectHandler = (e) =>{
        selectUser(e);
    }
    return(
        <div >
            {suggestionList && suggestionList.map((suggestion, id) =>{
                return(
                    <div className='suggestions' key={id} onClick={ () => onSelectHandler(suggestion.email)}>
                        {suggestion.email}
                    </div>
                )
            })}
        </div>
    )
}

export default Suggestions;