import React from "react";
import "./style.css";

const Btn = ({ simvol, stil, clikFunk }) => {
  return (
    <button
      onClick={() => {
        clikFunk(simvol);
      }}
      className={stil}
    >
      {simvol}
    </button>
  );
};

export default Btn;
