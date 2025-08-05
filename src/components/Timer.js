import { use, useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="timer">
      <p>
        Time left:{" "}
        <strong>
          {min < 10 ? "0" : ""}
          {min}:{sec}
        </strong>
      </p>
    </div>
  );
}

export default Timer;
