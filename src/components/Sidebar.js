import React from "react";
import "./Sidebar.css";
import User from '../containers/User'


const Sidebar = ({contacts}) => {

  const contactsArr = Object.values(contacts.contacts);

 return (
          <aside className="Sidebar">
          {
            contactsArr.map((contact, i) => {
                return (
                  <User key={i}
                    user={contact}
                  />
                );
              })
            }
            
          </aside>
          )
};

export default Sidebar;