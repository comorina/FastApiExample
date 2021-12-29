import React,{ useState, useContext} from 'react'

export default function Add(todos, setTodos, fetchTodos) {
    const [item, setItem] = useState("")
    const handleInput = event  => {
        setItem(event.target.value)
        console.log(event);
      }

    
      const handleSubmit = (event) => {
        const newTodo = {
          id: Math.random()*100,
          todo: item
        }
        console.log(item);
    
        fetch("http://localhost:8000/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo)
        })
      }

    return (

        <form>
            <input type="text" onChange={handleInput}/>
            <button type="button" onClick = {handleSubmit}>Add</button>
        </form>
    )
}
