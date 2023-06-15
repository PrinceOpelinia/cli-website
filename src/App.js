
import React, {useState}  from 'react';
import './App.css';
import Terminal from './components/Terminal';
import './styles.css';
import Typewriter from 'typewriter-effect';

const App = () => {
  return(

    <div className='appBackground'>
    
    <Typewriter
     
     onInit={(typewriter) => {
       typewriter.changeDeleteSpeed(1).changeDelay(10).typeString("Yo, welcome to my personal website.")
       .pause(2000)
       
       .deleteAll()
       .typeString("Type 'help' to view available commands: ")
       .stop()
       .start()
       
        
         }}
         />
     
         <Terminal/>

    </div>
  );
  
 
};


export default App;
