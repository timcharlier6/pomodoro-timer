import { useState, useEffect } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(0);
  const [idSec, setIdSec] = useState(null);
  const [idMin, setIdMin] = useState(null);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState(true);
  
  const start = () => {
    if (idMin && idSec !== null) {
      clearInterval(idSec);
      clearInterval(idMin);
    } else {
 
      setIdSec(setInterval( () =>{
        setSeconds(prev => prev - 1);
      }, 1000));
      setIdMin(setInterval( () =>{
        setMinutes(prev => prev - 1);
      }, 60000));
    }
  }

  const stop = () => {
    clearInterval(idMin);
    clearInterval(idSec);
    setIdSec(null);
    setIdMin(null);
  }

  const upSec = () => {
    if (idMin === null && idSec === null) {
      if (seconds < 59) {
        setSeconds(seconds + 1);
        } else {
          setSeconds (0);
        }
      } 
    } 
  

  const upMin = () => {
    if (idMin === null && idSec === null) {
      if (minutes < 59) {
      setMinutes(minutes + 1);
      } else {
        setMinutes (0);
      }
    } 
  }

  const downSec = () => {
    if (idMin === null && idSec === null) {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        } else {
          setSeconds (59);
        }
    }
  }
  const downMin = () => {
    if (idMin === null && idSec === null) {
      if (minutes > 0) {
        setMinutes(minutes - 1);
        } else {
          setMinutes (59);
        }
      }
    /*   setMinutes(minutes > 0 ? minutes - 1 : minutes);
    } */
  }

  useEffect(() => {
    if (minutes > 0 && seconds === -1) {
      setSeconds(59);
      }
    }, [seconds, minutes]);
  
  useEffect(() => {
    console.log(minutes + " min " + seconds + " sec");
    if (minutes <= 0 && seconds <= 0){
      console.log('works')
      setOver(true);
      console.log(over);
    } else {
      console.log('?')
      setOver(false);
      console.log(over);
    }  
  }, [seconds, minutes, over]);

  useEffect(() => {
    console.log(idMin +" "+idSec)
    if (over) {
      clearInterval(idMin);
      clearInterval(idSec);
      setIdSec(null);
      setIdMin(null);
    }
  }, [seconds, minutes, over, idSec, idMin]);

  const toggle = () => {
    setTime((state => !state));
    if (time === true && idSec === null && idMin === null) {
      setMinutes(25);
      setSeconds(60);
    } else if (time === false && idSec === null && idMin === null) {
      setMinutes(15);
      setSeconds(60);
    }
  }

  return (
    <>
      <div className='bigdiv'>
        <Header></Header>
        <main>
          <button className="toggle" onClick={toggle} style={{ backgroundColor: !time ? "green" : "red"}}>
            <p className='toggleText' style={{color: !time ? "white" : "whitesmoke" }}>
              {time ? 'Work' : 'Rest'}
            </p>
          </button>
          <section className='counterContainer'>
            <div className='arrowUp'>
              <button className='arrow' onClick={upMin}><SlArrowUp className='button'/></button>
              <button className='arrow' onClick={upSec}><SlArrowUp className='button'/></button>
            </div>
            <div className='blackBg'>
              {minutes === 0 && seconds === 0 && idMin == null && idSec == null ? (
                  <p className='counter' style={{letterSpacing:'0.1em'}}>OVER</p>
                ) : ( 
                  <p className='counter'>{minutes < 10 ? '0'+ minutes : minutes} <span className='clicking'>:</span> {seconds === 60 ? '00' : seconds < 10 ? '0' + seconds : seconds}</p>
                )} 
            </div>
            <div className='arrowDown'>
             <button className='arrow' onClick={downMin}><SlArrowDown className='button'/></button>
              <button className='arrow' onClick={downSec}><SlArrowDown className='button'/></button>
            </div>
          </section> 

          <section className='buttonContainer'>
            <button className="buttonGo" onClick={start}>Start</button>
            <button className="buttonGo" onClick={stop}>Stop</button>
          </section>   
        </main>
        <Footer></Footer>  
      </div>
    </>
  )
}

export default App
