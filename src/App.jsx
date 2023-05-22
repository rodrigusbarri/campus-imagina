import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { MyRoutes } from './routers/routes';
import { useEffect } from "react";
import { useState } from "react";
import Header from './components/Header';


function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}


function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   console.log('Function ran in Child component');
  //   setCount(count + 1);
  
  
  return (
   <>
  

   <BrowserRouter>
        <div>
          <div>
          </div>
          <MyRoutes />
        </div>
      </BrowserRouter>
    </> 


  );
}

export default App

    