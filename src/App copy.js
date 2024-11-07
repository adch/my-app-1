import {useState} from 'react';
import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar/Avatar.js';
import App2 from './App2/App2.js';

import { Routes,Route } from 'react-router';

function App() {
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 


const fourthExample = () => console.log('fourth example');

function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}
const inputEl = useRef(null);
const onButtonClick = () => {
  // `current` points to the mounted text input element
   inputEl.current.focus();
  };


  return (
    <>
      <header className="App-header">
        <Avatar/> 
        <App2 />
         <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
          </>

        <div>
        <h1>Task: Add a button and handle a click event</h1>
          <button onClick={handleClick}>Guess the number between 1 and 3</button>
        </div>

        <div className="fourthExample">
          <button onClick={fourthExample}>
            using a sepaddrate function declaration
          </button>
        </div>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 


    </>
  );
}

export default App;
