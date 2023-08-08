// Banner.js
import React from "react";
import Counter from "./Counter";
import './Banner.css'

export default function Banner() {
  return (
    <div className="banner">
      <div className="photo-profile">{/* <img  /> */}</div>
      <div className="numbers">
        <Counter number={5000} title="Happy customers" />
        <Counter number={900} title="Experienced developers" />
        <Counter number={10} title="Years in the industry" />
        <Counter number={4900} title="Website development" />
        
      </div>
    </div>
  );
}
