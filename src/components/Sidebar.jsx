import React from 'react'
import '../App.css';
import { sidebarData } from './sidebarData';
function Sidebar () {
  return (
    <div className='sidebar'>
        <ul className='sidebarlist'>
            {sidebarData.map((val, key) =>{
                return(
                    <li key={key} className='row' id={window.location.pathname = val.link ? "active" : ""} onClick={() => {window.location.pathname = val.link}}>
                        
                        <div id='icon'>{val.icon}</div>

                        <div id='title' >{val.title}</div>

                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default Sidebar;
