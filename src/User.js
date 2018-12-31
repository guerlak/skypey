import React from "react";
import "./User.css";

const User = ({username}) =>{

    return (
        <div className='User'>
            <p>{username}</p>
        </div>
    )
}

export default User;