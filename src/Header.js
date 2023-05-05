import './Header.css';
import React, { useState } from 'react';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('DS031221');

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function selectCourse(program) {
    setSelectedCourse(program);
  }

  return (
    <div id="Headersection">
      <div id="header">
        <p id="sitename">EDYODA</p>
      </div>

      <div id="header2">
        <div id="dropbar" onClick={toggleDropdown}>
          <p id="courseheadd">{selectedCourse}</p>
          <div id= {dropdownVisible ? 'arrow2' : 'arrow1'}></div>
        </div>
        <p id="coursetitle">Data Scientist Program</p>
        <p id="hitext">Hi Test Learner!</p>
        <div id="profileimg"></div>
      </div>

      <div id="header3" style={{visibility:dropdownVisible ? 'visible' : 'hidden'}}>
          <p id="selprog">Select Program</p>
          <div id="programs">
            <p
              id="prog1"
              onClick={() => selectCourse('ECRD')}
              style={{ color: selectedCourse === 'ECRD' ? 'black' : 'white', backgroundColor: selectedCourse === 'ECRD' ? 'white' : 'transparent' }}
            >
              ECRD
            </p>
            <p
              id="prog2"
              onClick={() => selectCourse('FSR222222')}
              style={{ color: selectedCourse === 'FSR222222' ? 'black' : 'white', backgroundColor: selectedCourse === 'FSR222222' ? 'white' : 'transparent' }}
            >
              FSR222222
            </p>
            <p
              id="prog3"
              onClick={() => selectCourse('DS261121')}
              style={{ color: selectedCourse === 'DS261121' ? 'black' : 'white', backgroundColor: selectedCourse === 'DS261121' ? 'white' : 'transparent' }}
            >
              DS261121
            </p>
            <p
              id="prog4"
              onClick={() => selectCourse('DS031221')}
              style={{ color: selectedCourse === 'DS031221' ? 'black' : 'white', backgroundColor: selectedCourse === 'DS031221' ? 'white' : 'transparent' }}
            >
              DS031221
            </p>
          </div>
        </div>
      
    </div>
  );
}


export default Header;
