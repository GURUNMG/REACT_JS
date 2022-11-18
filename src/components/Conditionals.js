import React from "react";


function Missed()
{
 return <h1  class="text-black hover:text-rose-600">Missed the shot</h1>
}

function Made()
{
 return <h1  class="text-pink-500 hover:text-black">GOAL scored</h1>
}

function Goal(props)
{
 // const isGoal=props.isGoal;
// if(isGoal) return <Made></Made>
// return <Missed></Missed>

// props ins conditional statement
 if(props.isGoal) return <Made ></Made>
 return <Missed></Missed>
}

export default Goal;