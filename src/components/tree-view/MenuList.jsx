import React from "react";
import MenuItem from "./MenuItem";
import './styles.css'

export const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length ? (
        list.map((listItem) => <MenuItem item={listItem} />)
      ) : (
        <p>data not found</p>
      )}
    </ul>
  );
};
export default MenuList;
