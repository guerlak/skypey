import React from 'react'
import './ChatWindow.css'

const header = ({user})=>{
    return (
        <div className="header">
            <h2>{user.name}</h2>
            <p>{user.status}</p>
        </div>
    )
}

export default header;