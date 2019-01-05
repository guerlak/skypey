import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import store from '../store/index_store'
import './App.css'


const App = () => {

  const { contacts, user, activeUserIdReducer } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={contacts}/>
      <Main user={user} activeUserId={activeUserIdReducer} />
    </div>
  );
};
export default App;
