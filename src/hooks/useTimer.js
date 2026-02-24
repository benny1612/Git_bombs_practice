// export function useTimer() {
//   const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60 * 10 * 1000;
//   const INTERVAL_IN_MILISECONDS = 100;
//   const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);

// useEffect(() => {
//         let interval;
//         const countDownUntilZero = () => {
//             setTime(prevTime => {
//                 if (prevTime === 0) clearInterval(interval);
//                 else return prevTime - INTERVAL_IN_MILISECONDS;
//             })
//         }

//         interval = setInterval(countDownUntilZero, INTERVAL_IN_MILISECONDS);
//         return () => clearInterval(interval);
//     }, []);

//     return <>
//         {(time/1000).toFixed(1)}s
//     </>;
// }
import { useState, useEffect, useCallback } from "react";

  const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const remainingSeconds = time % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

const useTimer = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);

  const reset = useCallback(() => {
    setIsActive(false);
    setSeconds(initialSeconds);
  }, [initialSeconds]);
  
  const timer = formatTime(seconds)

  return { timer, seconds, isActive, setIsActive, toggle, reset };
};

export default useTimer;


