import {React} from "react";


const Multiple=(a,b)=>
{
 return a*b;
}

const Add=(a,b)=>
{
 return a+b;
}

const a=10;
const b=2;


function Print()
{
  return(
   <div  >
    <h1 class="mb-2 border-2 border-sky-500 ">{Multiple(a,b)}</h1>
    
    <h1 class="outline outline-offset-0  ">{Add(a,b)}</h1>
   </div>
  
  )
}

export default Print;