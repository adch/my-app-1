import {useState} from 'react';
import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar/Avatar.js';
import App2 from './App2/App2.js';

import Homepage from "./Homepage.js";
import AboutMe from "./AboutMe.js";
import { Routes,Route,Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About me</Link>
        <Link to="/myApp2" className="nav-item">myApp2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/myApp2" element={<App2  />} />
      </Routes>
      <header className="App-header">
             
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* {true && console.log('This will shows')}
        {true && console.log('This will never show')} */}
      </header>

    </div>
  );
}

export default App;
