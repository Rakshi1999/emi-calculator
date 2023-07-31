import React, { memo } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

function CustomerInput({ title, titleValue, value, change, min, max }) {
  return (
    <div className="input-container">
      <div className="title-container">
        <h3>{title}</h3>
        <h3>
          {titleValue === "rupees" ? (
            <BsCurrencyRupee />
          ) : titleValue === "percentage" ? (
            "%"
          ) : titleValue === "year" ? (
            "Years"
          ) : (
            " "
          )}{" "}
          {value}
        </h3>
      </div>
      <input
        type="range"
        onChange={(e) => change(e.target.value)}
        defaultValue={value}
        min={min}
        max={max}
      />
    </div>
  );
}

export default memo(CustomerInput);
