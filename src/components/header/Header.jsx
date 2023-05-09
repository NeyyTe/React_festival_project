import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo1 from './images/logo1.png'


function Header() {
  return (
  <>
  <header className="header">

 {/* <div><img src={logo1} alt="" /></div> */}
<nav className="nav_links">
    <ul>
        <li><NavLink to ="/" aria-current="page">Accueil</NavLink> </li>
        <li><NavLink to ="/artistes">Artistes</NavLink></li>
        <li><NavLink to ="/programmation">Programmation</NavLink> </li>
        <li><NavLink to ="/infos">Infos</NavLink></li>
        <li><NavLink to ="/tickets">Tickets</NavLink></li>
    </ul>
</nav>
{/* <!-- <a href="#" class="cta_tickets">Tickets</a> --> */}
</header>

  
  </>
  )
}

export default Header