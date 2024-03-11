import React from "react";
import MenuList from "./MenuList";
import './styles.css'

export const TreeView = ({ menu = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
};
export default TreeView;
