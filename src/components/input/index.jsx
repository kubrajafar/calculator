import React from "react";
import "./style.css";
const Input = ({ result, text }) => {
  return (
    <div className="input">
      <h2>{result}</h2>
      <h4>{text}</h4>
    </div>
  );
};

export default Input;
