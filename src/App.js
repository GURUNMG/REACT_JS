// import React ,{Components} from 'react';
import './App.css';
import Print from './components/Multiple'
// functional components
import Hello from "./components/Hello"

// class component
import Car from './components/Cls_com';

//  This funtioin is used within the App.js file...
const Division = (a,b) => {
  return a/b;
}
Division(10,5);

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
      <Car></Car>

    </div>
  );
}

export default App;
