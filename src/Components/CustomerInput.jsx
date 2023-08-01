import React, { memo } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

function CustomerInput({ title, titleValue, value, change, min, max }) {
  return (
    <div className="input-container">
      <div className="title-container">
        {/* <h3>
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
        </h3> */}
      </div>
      <fieldset
        style={{
          padding: "0.5rem",
          borderRadius: "0.4rem",
          borderColor: "white",
        }}
      >
        <legend style={{ padding: "0.5rem" }}>
          <h3>{title}</h3>
        </legend>
        <input
          type="number"
          onChange={(e) => change(e.target.value)}
          defaultValue={value}
          min={min}
          max={max}
        />
      </fieldset>
    </div>
  );
}

export default memo(CustomerInput);
