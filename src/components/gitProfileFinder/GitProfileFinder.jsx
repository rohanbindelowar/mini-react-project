import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import './styles.css'

export const GitProfileFinder = () => {
  const [userName, setUserName] = useState("rohanbindelowar");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGihubData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
     
    }
  }
  console.log(userData);
  function handleSearch() {
    fetchGihubData();
  }

  useEffect(() => {
    fetchGihubData();
  }, []);
  if (loading) return <div style={{ fontSize: "20px" }}>loading data....</div>;
  return (
    <div className="git-profile-container">
      <div className="input-wrapper">
        <input
        className="searchBar"
          type="text"
          name="searchBar"
          placeholder="Enter The User Name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button disabled={userName==""?true:false} onClick={handleSearch}>Search</button>
      </div>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
};
export default GitProfileFinder;
