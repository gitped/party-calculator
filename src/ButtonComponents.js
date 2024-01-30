import React from "react";

const calculateClassName = (id) => {
  const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  if (["=", "clear"].includes(id))                return "col-12";
  else if (["/", "*", "-", "+"].includes(id))     return "col-lg-3 col-md-6";
  else if (["zero"].includes(id))                 return "col-8";
  else if (digits.includes(id) || id==="decimal") return "col-4";
  else                                            return "col-3";
};

export const SwitchButton = ({ id, description, onClick }) => {
  return (
    <div className="switch-container">
      <p>{description}</p>
      <label className="switch">
        <input type="checkbox" id={id} onChange={onClick} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
  
export const CalculatorButtons = ({ id, input, onClick }) => {
  return (
    <div className={calculateClassName(id)}>
      <button id={id} onClick={onClick}>
        {input}
      </button>
    </div>
  );
};

export const WallButtons = ({ id, input, onClick, buttonStyle }) => {
  return (
    <div className={calculateClassName(input)}>
      <div className="wall-buttons" style={buttonStyle}>
        <button id={id} onClick={onClick}>
          {input}
        </button>
      </div>
    </div>
  );
};