import React, { Fragment } from "react";
import Search from "../Search/Search";
import UserList from "../Users/UserList";

const Home = () => (
  <Fragment>
    <Search />
    <UserList />
  </Fragment>
);
export default Home;
