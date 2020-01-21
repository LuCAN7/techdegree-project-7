import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const Nav = (props) => {
 
  return (   
    <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/Cats" onClick={() => props.onSearch('cats')} >Cats</NavLink></li>
          <li><NavLink to="/Dogs" onClick={() => props.onSearch('dogs')} >Dogs</NavLink></li>
          <li><NavLink to="/Computers" onClick={() => props.onSearch('computers')} >Computers</NavLink></li>
        </ul>     
      </nav>

    </div>

  );
}

export default withRouter(Nav);