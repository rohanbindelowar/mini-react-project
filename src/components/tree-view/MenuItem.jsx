import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaPlus, FaMinus} from 'react-icons/fa'
import './styles.css'

export const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel){
    setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel] :! displayCurrentChildren[getCurrentLabel],
    });
  }
  console.log(displayCurrentChildren);
  return (
    <li className="menu-item">
      <div className="menuItemContainer">
        <h4>{item.label}</h4>
        {item && item.children && item.children.length ? <span onClick={()=>{handleToggleChildren(item.label)}}>{
            displayCurrentChildren[item.label]? <FaMinus/> : <FaPlus/>
        }</span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
export default MenuItem;
