import React, { memo, useState } from "react";

function Navbar({ typesOfLoan }) {
  const [selected, setSelected] = useState("1");
  return (
    <nav>
      <ul>
        {typesOfLoan.map((obj, i) => {
          return (
            <li
              className={selected === obj.id ? "list-active" : ""}
              onClick={(event) => setSelected(event.target.id)}
              id={obj.id}
              key={i}
            >
              <span>{obj.image}</span>
              {obj.name}
            </li>
          );
        })}

        <select className="select-tag">
          {typesOfLoan.map((obj, index) => {
            return (
              <option key={index} value={obj.name}>
                {obj.name}
              </option>
            );
          })}
        </select>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
