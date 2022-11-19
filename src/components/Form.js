// import React from "react";
import { useState } from 'react';
import React, { Component } from 'react';

//  function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input class=" text-red-500  border-2 border-sky-500 " type="text" />
//       </label>
//     </form>
//   )
// }

// function MyForm() {
//  const [name, setName] = useState("");

//  const handleSubmit = (event) => {
//    event.preventDefault();
//    alert(`The name you entered was: ${name}`)
//  }

//  return (
//    <form onSubmit={handleSubmit}>
//      <label>Enter your name:
//        <input 
//          type="text" 
//          value={name}
//          onChange={(e) => setName(e.target.value)}
//        />
//      </label>
//      <input type="submit" />
//    </form>
//  )
// }



class MyForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      id:"", 
      name:"",
      gender:"MALE"
    }
  }
   changeID=(event)=>{
    this.setState({
      id:event.target.value
    })
  }

  changeName=(event)=>{
    this.setState({
      name:event.target.value
    })
  }

  changeGender=(event)=>{
    this.setState({
      gender:event.target.value
    })
  }

  Submit=(event)=>{
    alert(`ID: ${this.state.id} NAME: ${this.state.name} GENDER: ${this.state.gender}`)
    // alert(`NAME: ${this.state.name}`) after closing 1st pop up then this alert will appear
    // alert( "ID: ", this.state.id, "NAME: ", this.state.name, "GENDER: ", this.state.gender)
    // event.preventDefault();
  }
  render() {
    // const {id, name, gender}=this.state;  --> for {this.state.id } --> {id}
    return (
      <form onSubmit={this.Submit}>
        <div>
          <label>Enter your ID</label>
          <input type="number" value={this.state.id} onChange={this.changeID}/>
        </div>

        <div>
          <label>Enter your Name</label>
          <input type="text" value={this.state.name} onChange={this.changeName} />
        </div>

        <div>
          <label> GENDER : </label>
          <select value={this.state.gender} onChange={this.changeGender}>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default MyForm;