import { useState } from "react";


function Color()
{
 const[color, setColor]=useState("RED");

 const click=()=>{
  setColor("BLUE");
 }

 const c1=()=>setColor("RED");
 // const last=()=>setColor(his.slice(1));
 return(
  <div>
    <h1 style={{color:color}}>Color is {color}</h1>
    <button class=" mx-3 border-2  border-orange-400"
      type="button" onClick={click}>CHANGE COLOR</button>

    <button class=" mx-3 border-2  border-orange-400" 
      type="button" onClick={c1}>Defalut Color</button>
{/* 
    <button class=" mx-3 border-2  border-orange-400"
      type="button" onClick={last}>LAST COLOR</button> */}

  </div>
 )
}

export default Color;