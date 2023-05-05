import './Instructors.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Instructors() {

  return (
    <div className="Instructors">

      <div id="leftbar">
        <Link to="/">
        <div id="homebuttonnn">
          <div id="homeimggg"></div>
          <p>HOME</p>
        </div>
        </Link>

        <Link to="/modulepython">
          <div id="modulesbuttonnn">
            <div id="modulesimggg"></div>
            <p>MODULES</p>
          </div>
        </Link>
        
        <div id="instructorsbuttonnn">
          <div id="instructorimggg"></div>
          <p>INSTRUCTORS</p>
        </div>
      </div>

      <div id="instructorsection">

        Instructors Page
        
        <div id="chatbott"></div>
        
      </div>
    </div>
  );
}

export default Instructors;
