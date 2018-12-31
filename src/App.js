import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import User from './User'
import './App.css'
import data from './data'

const App = () => {

  console.log(data)


  return (
    <div className="App">
      <Sidebar>
      {
        data.map((user, i) => {
          return (
            <User
              key={i}
              username={user.email}
            />
          );
        })
      }
      </Sidebar>
      <Main />
    </div>
  );
};
export default App;
