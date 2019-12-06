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

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        userList: action.payload,
        loading: false,
        error: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    case CLEAR_USERS:
      return {
        ...state,
        userList: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };
    case SET_ERROR:
      return {
        ...state,
        userList: [],
        loading: false,
        error: true
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: false
      };
    default:
      return state;
  }
};
