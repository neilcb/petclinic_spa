import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap';
import { Navbar } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavDropdown } from 'reactstrap';
import { MenuItem } from 'reactstrap';



// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
    <h1>SPA</h1>
      <ul  className="header">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
    
      </ul>
    </nav>
  </header>
)
export default Header