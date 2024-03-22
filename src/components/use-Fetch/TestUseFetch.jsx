import React, { useState, useRef } from "react";
import useFetch from "./useFetch";
import useOutSideClick from "../use-outside-click/OutsideClick"

export const TestUseFetch = () => {
  
  const { data, error, loading } = useFetch("https://dummyjson.com/users", {});
  const [showData, setShowData] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, ()=>setShowData(false));

  function handleOnClick(){
    setShowData(!showData);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" ,gap: "10px"}}
    >
      <h1>UseFetch Hook</h1>
      <div  >
        {loading ? <h1>Loading data!!!!!!</h1> : null}
        {error ? <h3>{error}</h3> : null}
        <button onClick={handleOnClick}>Users Name</button>
       <div ref={ref}>
       {
          showData?
            data && data.users && data.users.length
              ? data.users.map((user) => <p key={user.key}>{user.firstName}</p>)
              : null
          :null
        }
       </div>
      </div>
    </div>
  );
};
export default TestUseFetch;
