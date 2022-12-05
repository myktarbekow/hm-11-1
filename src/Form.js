import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
const colors = ["green", "red"];

function Form() {
  const [colorNow, setColorNow] = useState(colors);

  const colorsRef = useRef();
  useEffect(() => {
    const roma = setInterval(() => {
      colorsRef.current.style.backgroundColor =
        colorNow[Math.round(Math.random() * colors.length)];
      setColorNow(colorsRef.current.style.backgroundColor);
    }, 1000);
    return () => clearInterval(roma);
  }, [colors]);
  return (
    <div
      style={{ width: "300px", height: "300px" }}
      ref={colorsRef}
      className="container"
    ></div>
  );
}

export default Form;
