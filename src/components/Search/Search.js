import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import "./Search.css";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { searchUsers, clearResults, userList, setAlert } = githubContext;

  const [search, setSearch] = useState("");

  const onSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(search);
      setSearch("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={search}
          onChange={onSearch}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-dark"
        />
      </form>
      {userList.length > 0 && (
        <button onClick={clearResults} className="btn btn-block btn-light">
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
