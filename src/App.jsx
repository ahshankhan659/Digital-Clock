import { useState } from 'react';
import './App.css';

function App() {
 const time = new Date().toLocaleTimeString();
 const [currentTime, setCurrentTime]=useState(time);
 
 const updateTime=()=>{
  const time = new Date().toLocaleTimeString();
  setCurrentTime(time)
 }
 setInterval(updateTime,1000)
  return (
    <>
    <h2>Digital Clock Using React</h2>
  <h1>{currentTime}</h1>
    </>
  );
}

export default App;
