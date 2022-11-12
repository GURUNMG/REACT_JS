import React ,{Components} from 'react';
import './App.css';

// functional components
import Hello from "./components/Hello"

function App() {
  return (
    <div className="App">
      <h1>...........................</h1>
      <h1 class="not-italic hover:italic  text-2xl hover:text-6xl ">
        Hello GURU
      </h1>
      <h1>...........................</h1>
      <Hello></Hello>
      
    </div>
  );
}

export default App;
