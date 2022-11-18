import React from "react";

const Name=(props)=>
{
 return   <li class="hover:text-emerald-700  hover:font-bold">{props.name}</li>
}
// function Name(props)
// {
//  return   <li>{props.name}</li>
// }

function Members()
{
 const name=["GURU","BHARAN","NMG"]
 return (
  <div>
   <h1>MAP function to LIST the Elements in an array</h1>
   <ol>
    {name.map((members)=>{return <Name name={members} ></Name>})}
   </ol>
  </div>
 );
}

export default Members;