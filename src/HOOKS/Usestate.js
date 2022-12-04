import { useState } from "react";

function Color()
{
//  const[car, setCar]=useState({
//   Model:"Swift",
//   color:"RED",
//   Brand:"MARUTHI"
//  });

// UPDATING PARTICULAR OBJECT
// const updateColor=()=>{
//   // setCar(prev=>{ return {...prev,color:"BLUE"}})
//   setCar((prev)=>{
//     return{...prev,color:"BLUE"}
//   })
// }
//  const click=()=>{
//   setColor("BLUE");
//  }

//  const c1=()=>setColor("RED");
 // const last=()=>setColor(his.slice(1));
 
 const[count, setCount]=useState(()=> {return 0});

  const DECREMENT=()=>{
    setCount((prev_value)=>prev_value-1);
  }
  const INCREMENT=()=>{
    setCount((prev_value)=>prev_value+1);
  }

 return(
  <div>
    {/* <h1>USESTATE AS AN ARRAY</h1>
    <h1 style={{color:car.color}}>Car model is {car.Model} its color is {car.color}</h1>

    <button class=" mx-3 border-2  border-orange-400" 
      type="button" onClick={updateColor}>BLUE</button>  */}

    {/* <h1 style={{color:color}}>Color is {color}</h1>
    <button class=" mx-3 border-2  border-orange-400"
      type="button" onClick={click}>CHANGE COLOR</button>

    <button class=" mx-3 border-2  border-orange-400" 
      type="button" onClick={c1}>Defalut Color</button> */}
{/* 
    <button class=" mx-3 border-2  border-orange-400"
      type="button" onClick={last}>LAST COLOR</button> */}

      <h2>INCREMENT AND DECREMENT useState</h2>
      <button class=" mx-3 border-2  border-green-400" type="button"
      onClick={DECREMENT}>-</button>
      <h2>{count}</h2>
      <button class=" mx-3 border-2  border-green-400"type="button"
      onClick={INCREMENT}>+</button>

  </div>
 )
}

// hooks cannot be called conditionally
// hooks are executed in order
// useState can be initialized in 2 ways.. direct initialization of values or initializing
// the variable with a function

export default Color;