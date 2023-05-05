import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
    
      <div id="leftbar">
        <div id="homebuttonn">
          <div id="homeimgg"></div>
          <p>HOME</p>
        </div>

        <Link to="/modulepython">
          <div id="modulesbuttonn">
            <div id="modulesimgg"></div>
            <p>MODULES</p>
          </div>
        </Link>
        
        <Link to="/instructor">
        <div id="instructorsbuttonn">
          <div id="instructorimgg"></div>
          <p>INSTRUCTORS</p>
        </div>
        </Link>
      </div>

      <div id="homesection">
        <h1 id="upcoming">Upcoming Certifications</h1>
        <div id="topbox">

          <div id="topboximg">
            
          </div>

          <p id="topt1">CERTIFICATION | ATTEMPT 1</p>
          <p id="topt2">DATA ANALYSIS <br/>CERTIFICATION </p>
          <p id="topt3">COMPLETED | 21 MAR 2022</p>

          <div id="topinnerright">
            <p id="topl1">Exam Structure</p>
            <p id="topl2">Round 1</p> <p id="topl21">MCQS</p> <p id="topl22">CODING</p>
            <p id="topl3">Round 2</p> <p id="topl31">PROJECT</p>

            <div id="viewexam">
              VIEW EXAM DETAILS
            </div>
          </div>
          
        </div>

        <h1 id="continue">Continue Learning</h1>
        <p id="bottag">VIEW MODULE DETAILS</p>

        <div id="bottomleftbox">

          <div id="botleft1">
            <div id="bottomboximg1"></div>
            <p id="botl1">DATA WRANGLING & <br/>VISUALIZATION</p>
            <div id="bottomboximg2"></div> <p id="botl2">Test Instructor</p>
            <p id="botl3">Live Sessions</p> <div id="blueline1"></div>
            <p id="botl4">Assigments</p> <div id="blueline2"></div>
            <p id="botl5">MCQ Quiz</p> <div id="blueline3"></div>
          </div>

          <div id="botleft2">
            <p id="botr1">Today's Plan</p>
            <p id="botr2">21 March 2022</p>
            <p id="botr3">Data Transformation using <br/>Pandas - 3</p>
            <p id="botr4">Daily Feedback</p> <p id="botr41">opens at 7:30 PM</p>

            <div id="botr5">
              JOIN LIVE SESSION
            </div>

            <p id="botr6">BEGINS AT 7:30 PM</p>
          </div>
          
        </div>

        <div id="bottomrightbox">
          <p id="bt1">Progress Overview</p>

          <div id="bt2">
          <b id="btl1">0%</b><b id="btr1">Overall Grade</b>
          <div id="grayline1"></div>
          </div>

          <div id="bt3">
          <b id="btl2">0%</b><b id="btr2">Attendance</b>
          <div id="grayline2"></div>
          </div>

          <p id="bt4">VIEW DETAILED PROGRESS</p>
        </div>

        <div id="chatbot"></div>
        
      </div>
    </div>
  );
}

export default Home;
