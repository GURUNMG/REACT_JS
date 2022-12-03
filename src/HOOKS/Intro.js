import {React, useState} from "react";

function Update()
{

 const[name,setName]=useState("GURUBHARAN N M")
 return(
  <div>
    <h2 class="text-red-500 font-bold">HOOKS STARTS...</h2>
    <h1>My name is {name}</h1>

    <button class=" mx-3 border-2  border-orange-400" type="button" 
        onClick={()=>setName("N M G")}>NMG</button>
    <button class="mx-3 border-2  border-orange-400" type="button" 
        onClick={()=>setName("GURU")}>GURU</button>
    <button class="mx-3 border-2  border-orange-400" type="button"
        onClick={()=>setName("BHARAN")}>BHARAN</button>
  </div>
 );
}


// HOOKS CAN BE USED ONLY IN FUNCTIONAL COMPONENTS..
// HOOKS CANNOT BE CONDITIONAL
export default Update;