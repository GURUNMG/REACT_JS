// import React ,{Components} from 'react';
import './App.css';
import Print from './components/Multiple'
// functional components
import Hello from "./components/Hello"
import Pop from './components/Events';
// class component
import Car from './components/Cls_com';
import actor from './components/props';
//  This funtioin is used within the App.js file...
const Division = (a,b) => {
  return a/b;
}
Division(10,5);

// Simple jsx (javascript xml) example
const head1=<h1> heading 1</h1>

// all mathematical ooperations, function calling, performing actions are done within {}
const operation=<h1>TWO plus TWO is {2+2}</h1>;

function App() {
  return (

    <div className="App">

      <h1>...........................</h1>
      <h1 class="not-italic hover:italic  text-2xl hover:text-6xl ">
        Hello GURU
      </h1>
      <h1>...........................</h1>

      <Hello></Hello>

      <h1>MATHEMATICAL OPERATIONS</h1>
      <div class="mt-8">
      <Print></Print>
      </div>
      {/* to  call the function we need to use {call_the_function()}*/}
      {Division(10,5)}
      {head1}
      {operation}
      <Car></Car>
      {actor}  {/* props */}
      <Pop></Pop>

      
    </div>
  );
}

export default App;
