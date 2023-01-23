import React from "react";
const tabs = ['Home', 'Thoughts', 'Contact'];

function Nav (props) {
    return (
      <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className={
          props.currentPage ===tab ?"nav-item is-active" : "nav-item"
         } key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    )
}


export default Nav;
