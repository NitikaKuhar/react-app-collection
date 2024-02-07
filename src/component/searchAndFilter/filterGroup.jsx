import React from 'react';

const Filter = ({label, selected, value, updateList}) =>{

    const onChange = (e) =>{
        // console.log(e.target.value)
        updateList(e.target.value)
    }

    return(
        <div>
            <label>{label}</label>
            <input type="radio"  value={value} checked={selected}
            onChange={onChange}/>
        </div>
    )
}

export default Filter