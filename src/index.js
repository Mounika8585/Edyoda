import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ModuleAs from './ModuleAs';
import ModuleQuiz from './ModuleQuiz';
import ModulePython from './ModulePython';
import Instructors from './Instructors';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Header/>
    <div className="App">
        <Routes>
        
          <Route path="/"  element={ <Home/> } />
          <Route path="moduleassign" element={ <ModuleAs/> } />
          <Route path="modulequiz"  element={ <ModuleQuiz/> } />
          <Route path="modulepython"  element={ <ModulePython/> } />
          <Route path="instructor"  element={ <Instructors/> } />
          
        </Routes>
    </div> 
  </BrowserRouter>
);

