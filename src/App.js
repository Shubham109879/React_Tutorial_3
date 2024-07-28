import { useState } from "react";

function App(props) {
  // let year=2024
  const [year,setYear]=useState(2024);
  function updateYear()
  {
    setYear(year+1)
  }
  return (
    <>
     <h3>Current Year: {year}</h3>
     <button onClick={updateYear}>Change Year</button>
    </>
   
  );
}

export default App;
