import React,{ useState } from "react";
import DynamicPopUp from "./DynamicPopUp";
import "./styles.css";

export default function ModelTest() {
  const [showPopUp, setShowPopUp] = useState(false);

  function handlePopUp() {
    setShowPopUp(!showPopUp);
  };
  function onCLose() {
    setShowPopUp(false);
  };
  console.log(showPopUp)
  return (
    <div>
      <button onClick={handlePopUp} className="button-cr">
        {
            showPopUp===false? "Open the Pop Up":"Close the Pop Up"
        }
      </button>
      {showPopUp && (
        <DynamicPopUp onCLose={onCLose} body={<div>This is customized</div>} />
      )}
    </div>
  );
}
