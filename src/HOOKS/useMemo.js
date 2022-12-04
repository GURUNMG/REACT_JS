import React, {useState, useMemo} from "react";


function Memo()
{
 const[number,setNumber]=useState(1);

 const INCREMENT=()=>{
  setNumber(prev=>prev+1);
 }
 const product=useMemo(()=>{
  // console.log("product")
  return slow(number)
 },[number])

 return(
  <div>
   <h1>{number}</h1>
   <button type="button" onClick={INCREMENT}>INCREMENT</button>
   <h2>{product}</h2>
  </div>
 )
}

function slow(num)
{
 for (let i=0; i<10000; i++);
 return num*2;
}
export default Memo;

// useMemo is used when the function returning value is slow we can try useMemo
// it can also be used, when the differtent obj values are same no need to rendetr the obj 
// always