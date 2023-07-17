import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  const renders = useRef(0);
  const timerId = useRef();

  useEffect(() => {
    if (seconds === 0 && minutes > 0) {
      setMinutes(prev => prev - 1);
      setSeconds(60);
    }
  }, [seconds, minutes]);

  const startTimer = () => {
    if (timerId.current) return; 
    timerId.current = setInterval(() => {
      renders.current++;
        if (seconds === 60 && minutes === -1) {
          stopTimer();
          return;
          <p>Time to take a break!</p>

        } else if (seconds >= 0) {
          setSeconds(prev => prev - 1);
        } else {
          setMinutes(prev => prev - 1);
          setSeconds(59);
        }
      }, 1000);
    };
  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setMinutes(24);
    setSeconds(60);
  };

  return (
    <>
      <Header />
      <main className="App">
        <section className="section">
          <button className="button" onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </section>
        <br />
        <br />
        <div className='counterContainer'>
          <p className='counter'>
             { seconds === 60 ? minutes + 1 : minutes < 10 || seconds === 60 ? '0' + minutes : minutes} : {seconds === 60 ? '00' : seconds < 10 ? '0' + seconds : seconds} 
          </p>
        </div>
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
}

export default App;
