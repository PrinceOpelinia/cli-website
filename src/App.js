
import React, {useState}  from 'react';
import './App.css';
import Terminal from './components/Terminal';
import './styles.css';
import Typewriter from 'typewriter-effect';

const App = () => {
  return(

    <div className='appBackground'>
    
    <Typewriter
  options={{
    deleteSpeed: 50,
    delay: 50,
    strings: ['Hello, welcome to my website', 'My name is Prince!','How are you doing today?'],
    autoStart: true,
    loop: true,
  }}
/>
    <p>
      Type 'help' to see available commands
    </p>
    <Terminal></Terminal>
    </div>
  );
  
  
 
};


export default App;
