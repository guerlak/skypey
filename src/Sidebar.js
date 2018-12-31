import React from "react";
import "./Sidebar.css";


const Sidebar = props => {
 return (
          <aside className="Sidebar">
            {props.children}
          </aside>
          )
};

export default Sidebar;