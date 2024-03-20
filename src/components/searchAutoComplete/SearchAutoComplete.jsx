import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import './styles.css'

export const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  function handleChanges(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }

  function handleClick(event) {
    setShowOptions(false);
    setSearchParam(event.target.innerText);
    setFilteredUser([]);
  }

  async function fetchData() {
    try {
      setLoading(true);
      let response = await fetch("https://dummyjson.com/users");
      let data = await response.json();

      if (data && data.users && data.users.length) {
        setUser(data.users.map((useritem) => useritem.lastName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(filteredUser);
  return (
    <div className="search-container">
      {loading === true ? <h1>Loading Data! please wait..</h1> : <h1>{error}</h1>}
      <h2>Find the Friend!</h2>
      <input
        type="text"
        value={searchParam}
        name="search-user"
        placeholder="Begin your search here.."
        onChange={handleChanges}
      />
      {showOptions === true ? <Suggestions handleClick={handleClick} data={filteredUser} /> : null}

      {!showOptions && searchParam.length>2? <h1>Happy Birthday, {searchParam}</h1>:null}
    </div>
  );
};
export default SearchAutoComplete;
