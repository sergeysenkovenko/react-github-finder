import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login } }) => {
    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt={login} 
                className="round-img" 
                style={{width: '100px'}}/>
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
