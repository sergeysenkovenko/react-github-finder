import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Alert = () => {
  const githubContext = useContext(GithubContext);

  const { alert } = githubContext;
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" style={{marginRight: '0.5rem'}}></i>
        {alert.message}
      </div>
    )
  );
};

export default Alert;
