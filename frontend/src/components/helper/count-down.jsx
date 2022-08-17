
import { useState, useEffect } from "react";

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, timerStatus, restartTimer }) => {
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (h === 0 && m === 0 && s === 0) {
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    console.log(s)
    return () => clearInterval(timerID);
  });

  return (
    <input
      className="count_down" 
      value={ `${s.toString().padStart(2, '0')}` } 
      onChange={ s === 0 ? timerStatus(true) : undefined }
      />
  );
};
export { CountDown }