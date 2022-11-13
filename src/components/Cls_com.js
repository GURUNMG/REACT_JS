import React from 'react';

function G(props) {
   return <h1>
    hello this is {props.name}
   </h1>;
}


class Car extends React.Component
{
 constructor()
 {
   super();
   this.state={color:"red",brand:"jaguar"};
 }
 render()
 {
  return ( 
   <div>
    <h1 style={this.state}>
     hi this is class  component car brand is {this.state.brand} and its color is {this.state.color}
    </h1>

    <G name="GURUBHARAN N M from props"></G>
   </div>
  );
 }
}

// const h=new Car();

export default Car;