import React, { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

const UserList = () => {

  const githubContext = useContext(GithubContext);

  const { loading, userList, error } = githubContext;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h2 style={{textAlign: 'center', marginTop: '1rem'}}>User not found</h2>
  }
  return (
    <div style={userStyle}>
      {userList.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  marginTop: "0.7rem",
};

export default UserList;
