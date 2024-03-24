import React, { useEffect, useState } from "react";
import "./styles.css";

export const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);
  const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

  function handleScroll() {
    const scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop;
    
    (scrollHeight / height) * 100 > 50
      ? setIsVisible(true)
      : setIsVisible(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("isisisisi" + isVisible);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleScrollbottom(){
    window.scrollTo({ top:height, left: 0, behavior: "smooth" });
  }

  return (
    <div>
      {!isVisible ? (
        <button className="scrollBottom" onClick={handleScrollbottom}>
          &darr;
          Bottom
        </button>
      ) : null}
      {isVisible ? (
        <button className="scrollTop" onClick={handleScrollTop}>
          &uarr;
          Up
        </button>
      ) : null}
    </div>
  );
};
export default ScrollToTop;
