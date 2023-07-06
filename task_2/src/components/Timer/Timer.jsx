import React, { useState, useEffect } from 'react';
import sound from "../../sounds/sound.mp3";
import "./Timer.css";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState('stopped');
  const [soundPlaying, setSoundPlaying] = useState(false);

  const startTimer = () => {
    setStatus('running');
  };

  const stopTimer = () => {
    setStatus('stopped');
  };

  const resetTimer = () => {
    setStatus('stopped');
    setMinutes(0);
    setSeconds(0);
    setSoundPlaying(false);
  };

  const tick = () => {
    if (status === 'running') {
      if (seconds === 0 && minutes === 0) {
        setSoundPlaying(true);
        setStatus('finished');
      } else if (seconds === 0) {
        setMinutes(prevMinutes => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }
  };

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  }, [minutes, seconds, status]);

  useEffect(() => {
    if (soundPlaying) {
      playSound();
    }
  }, [soundPlaying]);

  useEffect(() => {
    const storedState = localStorage.getItem('timerState');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      setMinutes(parsedState.minutes);
      setSeconds(parsedState.seconds);
      setStatus(parsedState.status);
    }
  }, []);

  useEffect(() => {
    const stateToStore = { minutes, seconds, status };
    localStorage.setItem('timerState', JSON.stringify(stateToStore));
  }, [minutes, seconds, status]);

  const handleMinutesChange = (event) => {
    if (status === 'stopped') {
      setMinutes(parseInt(event.target.value, 10));
    }
  };

  const handleSecondsChange = (event) => {
    if (status === 'stopped') {
      setSeconds(parseInt(event.target.value, 10));
    }
  };

  const handleStartButtonClick = () => {
    startTimer();
  };

  const handleStopButtonClick = () => {
    stopTimer();
  };

  const handleResetButtonClick = () => {
    resetTimer();
    if (status ==='finished') document.body.style.backgroundColor = 'white';
  };

  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  const buttonDisabled = status === 'running';
  const inputDisabled = status === 'running';

  if (status ==='finished') document.body.style.backgroundColor = 'red';

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <input type="number" min="0" max="60" value={minutesDisplay} onChange={handleMinutesChange} disabled={inputDisabled} />
        <span>:</span>
        <input type="number" min="0" max="60" value={secondsDisplay} onChange={handleSecondsChange} disabled={inputDisabled} />
      </div>
      <div className='buttons'>
        <button onClick={handleStartButtonClick} disabled={buttonDisabled}>
          Start
        </button>
        <button onClick={handleStopButtonClick} disabled={!buttonDisabled}>
          Stop
        </button>
        <button onClick={handleResetButtonClick}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
