import React from "react";
import './styles.css'

export const Suggestions = ({ data, handleClick }) => {
  return (
    <ul className="box">
      {data && data.length
        ? data.map((item, index) => (
            <li className="items" onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : <li>no one found</li>}
    </ul>
  );
};
export default Suggestions;
