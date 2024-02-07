import React , {useState} from 'react';

const TodoList = ({list, remove}) =>{

    const onDelete = (todoItem) =>{
        remove(todoItem)
    }
    return(
        <div> 
            {list.length > 0 ? 
                <ul className='todo-list'>
                    {list.map((item, idx)=>{
                        return(
                            <div className="todo-items" key={idx}>
                                <li key={idx}>{item}</li>
                                <button className='delete-btn' onClick={()=> onDelete(item)}>Delete</button>
                            </div>
                        )
                    })}
                </ul>
            : (<div className='empty'>
                <p>No task added</p>
            </div>)}
        </div>
    )
}

export default TodoList;