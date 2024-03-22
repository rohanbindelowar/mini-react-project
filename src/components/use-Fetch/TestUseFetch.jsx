import React, { useState } from "react";
import useFetch from "./useFetch";

export const TestUseFetch = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/users", {});
  const [showData, setShowData] = useState(false);
  console.log(data, error, loading);

  function handleOnClick(){
    setShowData(!showData);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" ,gap: "10px"}}
    >
      <h1>UseFetch Hook</h1>
      <div>
        {loading ? <h1>Loading data!!!!!!</h1> : null}
        {error ? <h3>{error}</h3> : null}
        <button onClick={handleOnClick}>Users Name</button>
        {
          showData?
            data && data.users && data.users.length
              ? data.users.map((user) => <p key={user.key}>{user.firstName}</p>)
              : null
          :null
        }
      </div>
    </div>
  );
};
export default TestUseFetch;
