import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import ModuleAs from './ModuleAs';
import ModuleQuiz from './ModuleQuiz';
import ModulePython from './ModulePython';
import Instructors from './Instructors';

function App() {
  return (
    <div className="App">
        <Routes>
        
          <Route path="/"  element={ <Home/> } />
         
          <Route path="moduleassign" element={ <ModuleAs/> } />
            
       
          <Route path="modulequiz"  element={ <ModuleQuiz/> } />

          <Route path="modulepython"  element={ <ModulePython/> } />
            
          <Route path="instructor"  element={ <Instructors/> } />
          
        </Routes>
    </div>
  );
}

export default App;
