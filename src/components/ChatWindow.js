import React from "react";
import ChatWindowHeader from './ChatWindowHeader'
import ChatWindowConversation from './ChatWindowConversation'
import ChatWindowMsgInput from './ChatWindowMsgInput'
import store from '../store/index_store.js'


const ChatWindow = ({ user }) => {
const userId = user.user_id;

const msgs = store.getState().messages[userId]

console.log(msgs)

const messagesArr = Object.values(msgs);

  return (
    <div>
    <ChatWindowHeader user={user}/>
    <ChatWindowConversation messages={messagesArr}/>

    </div>
  );
};

export default ChatWindow;