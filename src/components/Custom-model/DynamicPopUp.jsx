import React, { useState } from "react";

export const DynamicPopUp = ({ id, header, body, footer, onCloses }) => {
  return (
    <div id={id || "model"} className="model">
      {/* <span onClick={onCloses} className="close-icon">
        &times;
      </span> */}
      <div className="content">
        <div className="header">{header ? header : <h2>"Header"</h2>}</div>
        <div className="body">{body ? body : <div>THis is body</div>}</div>
        <div className="footer">{footer ? footer : <h2>"Footer"</h2>}</div>
      </div>
    </div>
  );
};
export default DynamicPopUp;
