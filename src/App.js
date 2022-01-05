import './App.css';                             // Importing CSS file.
import React, { useState } from 'react';

// Importing File.
import Massage from './component/Massage';
import List from './component/List';
import Add from './component/Add';
// Importing Router here.
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Here Adding Router for linking pages to each other.

export default function App() {
  return (
    <Router>
      <header>
        <h1 className='t'>Todo App</h1>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/list">
            <Massage />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <List />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};