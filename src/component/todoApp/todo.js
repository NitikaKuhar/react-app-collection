import React, {useState} from 'react'
import './todo.css';
import TodoList from './todo-list';


const Todo = () =>{
const [todoList, setTodoList] = useState([]);
const [todo, setTodo] = useState('');



const addHandler = () =>{
    if(todo.length){
        setTodoList([...todoList, todo]);
        setTodo(" ");
    }
    
}

const deleteHandler = (todoItem) =>{

    const newTodoList = todoList.filter((item) => item !== todoItem);

    setTodoList(newTodoList);

}

return(
    <div className='todo-main'>
        <h1>React Todo App</h1>
        <div className='input-wrapper'>
        <input className="todo-input" placeholder='Enter todo item...' onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button className="add-btn" onClick={addHandler}>Add item</button>
         <TodoList list={todoList}  remove={deleteHandler}/> 
     
        </div>
        

    </div>
)

}
export default Todo;