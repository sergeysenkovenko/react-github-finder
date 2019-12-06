import React, { useReducer } from "react";
import AppService from "../../services/appService";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  SET_ERROR,
  REMOVE_ERROR
} from "../types";

const GithubState = props => {
  const initialState = {
    userList: [],
    user: {},
    repos: [],
    loading: null,
    alert: null,
    error: false
  };

  const appService = new AppService();
  const { fetchUsers, fetchUser, fetchUserRepos } = appService;

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async search => {
    if (search) {
      setLoading();
      const users = await fetchUsers(search);
      if(users && users.length > 0) {
        dispatch({
          type: SEARCH_USERS,
          payload: users
        });
      }else {
        dispatch({ type: SET_ERROR })
        setTimeout(() => {
          dispatch({
            type: REMOVE_ERROR
          })
        }, 5000);
      }
    }
  };

  const getUser = async username => {
    setLoading();
    const user = await fetchUser(username);
    dispatch({
      type: GET_USER,
      payload: user
    });
  };

  const getUserRepos = async username => {
    const repos = await fetchUserRepos(username);
    dispatch({
      type: GET_REPOS,
      payload: repos
    });
  };

  const clearResults = () => {
    dispatch({
      type: CLEAR_USERS,
      payload: []
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type }
    })
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      })
    }, 3000);
  };

  return (
    <GithubContext.Provider
      value={{
        userList: state.userList,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        error: state.error,
        alert: state.alert,
        searchUsers,
        getUser,
        getUserRepos,
        clearResults,
        setAlert
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
