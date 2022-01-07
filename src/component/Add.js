import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Add() {
  const [item, setItem] = useState("")
  //const [inputtext, setInputtext] = useState("")
  const handleInput = event => {
    setItem(event.target.value)
    //console.log(event);
  }

  const handleSubmit = (event) => {
    if (item === "") {
      alert("Please enter something here!");
    }
    else {
      const newTodo = {
        todo: item
      }
    
      //console.log(item);
      event.preventDefault();
      setItem("")

      fetch("https://todo-fast-imss.herokuapp.com/todo", {
        method: "POST",
        mode:"cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo)
      })
    }
  }
  return (

    <form>
      <input type="text" value={item} onChange={handleInput} className="todo-input" />
      <button type="button" onClick={handleSubmit} className="todo-button">Add</button>
      <div>
        <Link to={'/list'}>
          <button type='button' className="showbtn1">Show Todo</button>
        </Link>
      </div>
    </form>

  )
}
