import React, { useState } from "react";


const Terminal = () => {
  
  const[data,setData] = useState(null);
function getData(val)
{
  setData(val.target.value)
  console.warn(val.target.value)
}

return(
  <div className='terminal-input-area'>
    <span className='terminal-prompt'></span>
      <input 
          type = "text"
          className='terminal-input'
          name = "input"
          onChange={getData}
      />

      <p>
        {data}
      </p>
  </div>

);
};

export default Terminal;
