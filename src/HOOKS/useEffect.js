import { useState, useEffect } from "react";

function Use()
{

 const[count, setCount]=useState(0);
 const[inc,setInc]=useState(0);

 const timer=()=>setInc((inc)=>inc+1)
 useEffect(() => {
  let timer=setTimeout(() => {
   setCount((count)=>count+1)
   }, 1000);

  return () => clearTimeout(timer)
},[]);


 return(
  <div>
   <h1>I have rendered {count} times</h1>
   <h1>BUTTON INCREMENT VALUE {inc}</h1>
   <button class=" mx-3 border-2  border-orange-400" type="button" 
    onClick={timer}> INCREMENT</button>
  </div>
 )
}

export default Use;