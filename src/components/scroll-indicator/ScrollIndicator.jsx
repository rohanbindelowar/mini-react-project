import React, { useEffect, useState } from "react";
import './styles.css'

export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrollHeight / height) * 100);
  }
  console.log(scrollPercentage);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className="scroll-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};
export default ScrollIndicator;
