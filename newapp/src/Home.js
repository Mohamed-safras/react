import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

function Home() {
  const [days, setdays] = useState("00");
  const [hours, sethours] = useState("00");
  const [miniutes, setminiutes] = useState("00");
  const [second, setsecond] = useState("00");
  let interval = useRef();
  const current = () => {
    const countTimer = new Date("Jan 16 2021 ").getTime();
    interval = setInterval(() => {
      const localTimer = new Date().getTime();
      const remainTime = countTimer - localTimer;
      const days = Math.floor(remainTime / (1000 * 3600 * 24));
      const hours = Math.floor(
        (remainTime % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      const miniutes = Math.floor((remainTime % (1000 * 3600)) / (1000 * 60));
      const sec = Math.floor((remainTime % (1000 * 60)) / 1000);

      if (remainTime < 0) {
        clearInterval(interval.current);
      } else {
        setdays(days);
        sethours(hours);
        setminiutes(miniutes);
        setsecond(sec);
      }
    }, 1000);
  };
  useEffect(() => {
    current();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <section>
      <h1>Amazon new year offer </h1>
      <div className="continer2">
        <div className="totaltime">
          <div className="time">{days}</div>
          <span>Days</span>
        </div>
        <div className="totaltime">
          <div className="time">{hours}</div>
          <span>Hours</span>
        </div>
        <div className="totaltime">
          <div className="time">{miniutes}</div>
          <span>Miniutes</span>
        </div>
        <div className="totaltime">
          <div className="time">{second}</div>
          <span>Seconds</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
