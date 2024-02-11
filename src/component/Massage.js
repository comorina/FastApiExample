import React, { useState, useEffect } from 'react';
import Check from './check.png';
import Bin from './bin.png';


export default function Todos() {
  const [todos, setTodos] = useState([])
  //const [showusr, setShowusr] = useState("")

  

  const fetchTodos = async () => {
    // const response = await fetch("https://todo-fast-imss.herokuapp.com/todo")
    const response = await fetch("http://127.0.0.1:8000/todo")
    const todos = await response.json()
    //console.log(todos.data);
    setTodos(todos.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])



  return (
    <div>
      {todos.map((todo) => (
        <table cellspacing={85} className='todo_table'>
          <td>{todo.todo}</td>
          <td><button className='complete-btn'><img src={Check} className='img' /></button>
            <button  className='trash-btn'><img src={Bin} className='img' /></button>
          </td>
        </table>
      ))}
    </div>
  )
}