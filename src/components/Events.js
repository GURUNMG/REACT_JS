import React from "react";




function Pop(){
 const show=()=>
{
 alert("Alert Messsage part of events like oneventlistener... etc")
}
 return(
 <div class="border-black">
   <button class="border-2 hover:border-t-4  border-red-700 hover:border-blue-500"onClick={show}>
    EVENT button
   </button>
 </div> 
 )
}


export default Pop;