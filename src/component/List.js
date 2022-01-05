import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Home() {
    const [usr, setUsr] = useState("");
    const handleInput = event => {

        setUsr(event.target.value)
        console.log(event);

    }
    const handleSubmit = (event) => {
        const newUsr = {
            username: usr
        }
        console.log(usr);
        event.preventDefault();
        setUsr("")

        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUsr)
        })
       
    }

    return (
        <div>
            <h3 className='usr'>Username</h3>
            <div>
                {/* Input Text Field Add */}
                <input onChange={handleInput} value={usr} autoFocus required className='inpt' /><br /> 
            </div>
            {/* Button Add */}
            <div>
                <Link to ="/add">
                    <button onClick={handleSubmit} className="startbtn" placeholder='John Doe' autoFocus required>START</button>
                </Link>
            </div>
        </div>
    );
};
export default Home;