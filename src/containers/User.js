import React from "react";
import "./User.css";
import {setActiveUserId, setActiveUser} from '../actions/index._actions'
import store from '../store/index_store'

const User = ({ user }) => {

  const { name, profile_pic, status, user_id } = user;

    return (
        <div className="User" onClick={() => handleUserClick({user, user_id})}>
          <img src={profile_pic} alt={name} className="User__pic" />
          <div className="User__details">
            <p className="User__details-name">{name}</p>
            <p className="User__details-status">{status}</p>
          </div>
      </div>
    )

}

function handleUserClick({user, user_id}) {
  store.dispatch(setActiveUserId(user_id));
  store.dispatch(setActiveUser(user))
}

export default User;