import { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [idSec, setIdSec] = useState(null);
  const [idMin, setIdMin] = useState(null);
  let over;
  
  const isOver = () => {
    if (seconds > 2 && minutes > 0){
      return true
    } else {
      return false;
    }
  };



  const start = () => {
    if (idMin && idSec !== null) {
      clearInterval(idSec);
      clearInterval(idMin);
    } else {
 
      setIdSec(setInterval( () =>{
        setSeconds(prev => prev + 1);
      }, 1000));
      setIdMin(setInterval( () =>{
        setMinutes(prev => prev + 1);
      }, 60000));
    }
  }

  const stop = () => {
    clearInterval(idMin);
    clearInterval(idSec);
    setIdSec(null);
    setIdMin(null);
  }

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
  }

  useEffect(() => {
    over = isOver();
    console.log(over);
    console.log(minutes + " min " + seconds + " sec");

    if (seconds === 60) {
      setSeconds(0);
    } else if (over) {
        stop(); 

      }
    }, [seconds, minutes]);
  

  return (
    <>
      <Header></Header>
      <div className='counterContainer'>
        {over ? (
            <p className='counter'>over</p>
          ) : (
            <p className='counter'>{minutes < 10 ? '0'+ minutes : minutes} : {seconds < 10 ? '0'+seconds : seconds}</p>
          )}
      </div> 
     <br></br>
      <section>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </section>    
      <Footer></Footer>  
    </>
  )
}

export default App
