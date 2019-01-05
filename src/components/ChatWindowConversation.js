import React from 'react'
import './ChatWindow.css'

const chatWindowConversation = ({messages}) => {


        const view = messages.map((msg, i) => {
            console.log(msg)
            if(msg.if_user_msg){
                return (
                    <p className='Chat is-user-msg'>{msg.text} eeee</p>
                )}else{
                    return (
                        <p className='Chat'>{msg.text}</p>
                    )
                    
                }
            }
           )

      return (
          <div className="chats">{view}</div>
      )
    }

export default chatWindowConversation;