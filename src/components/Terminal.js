import React, { useState } from "react";


const Terminal = () => {
  
const[data,setData] = useState(null);
const [displayText, setDisplayText] = useState(null);

function getData(val)
{
  setData(val.target.value)
  console.warn(val.target.value)
}

const handleSubmit = (val) => {
  if(data === 'help')
    setDisplayText('test');
  else  
    setDisplayText("Unknown command, input 'help' to view available commands.");
}

const handleKeyPress = (val) =>{
  if(val.key === 'Enter'){
    handleSubmit();
  }

};

return(
  <div className='terminal-input-area'>
    <span className='terminal-prompt'></span>
    <p>prins@dev:~$&nbsp;</p>
      <input 
          type = "text"
          value = {data}
          className='terminal-input'
          name = "input"
          onChange={getData}
          onKeyDown={handleKeyPress} 
          autoComplete="off"

          
      >
       
      </input>
      <div>
      {displayText && <p>{displayText}</p>}
       
      </div>
  </div>
);

};

export default Terminal;
