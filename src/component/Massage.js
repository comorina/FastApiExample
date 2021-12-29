import axios from 'axios';
import React,{ useState, useEffect} from 'react';
import Add from './Add';



export default function Todos() {
    const [todos, setTodos] = useState([])
    
    const fetchTodos = async () => {
        const response = await fetch("http://localhost:8000/todo")
        const todos = await response.json()
        console.log(todos.data);
        setTodos(todos.data)
    }
  


  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
        <form>
        <Add  fetchTodos/>
            {todos.map((todo)=>(
            
            <p>{todo.id,todo.todo}
                
                </p>
            ))}
        </form>
    </div>
  )
}