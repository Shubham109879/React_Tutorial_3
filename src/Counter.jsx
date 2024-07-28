import React from 'react'
import {useState} from 'react';

function Counter() {
    const [counter,setCounter]=useState(0);
    function decreaseCount()
    {
       setCounter(counter-1) 
    }

    function increaseCount()
    {
       setCounter(counter+1) 
    }

  return (
    <>
    
     <h1>COUNTER: </h1>
     <button onClick={decreaseCount}> - </button>
     <input type='text' value={counter} ></input>
     <button onClick={increaseCount}> + </button>
    </>
  );
}

export default Counter;
