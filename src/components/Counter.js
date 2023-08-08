// Counter.js
import React from "react";
import CountUp from "react-countup";


export default function Counter({ number, title }) {
    const formattedNumber = "+" + number; // Add + sign to the number

  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={formattedNumber} />
      <span>{title}</span>
    </div>
  );
}
