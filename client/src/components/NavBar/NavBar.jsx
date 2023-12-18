import React from 'react'
import { NavLink } from 'react-router-dom'
import setIcon from '../../assets/icons/settings-icon.svg'
import caseIcon from '../../assets/icons/nav-icon-case.svg'
import './NavBar.css'
import { MAIN_ROUTE, SETTINGS_ROUTE } from '../../utils/consts'

const NavBar = () => {
  return (
    <nav className='navigation'>
        <NavLink to={MAIN_ROUTE}>
        <img src={caseIcon} alt="" />
        </NavLink>
        <NavLink to={SETTINGS_ROUTE}>
        <img src={setIcon} alt="" />
        
        </NavLink>
    </nav>
  )
}

export default NavBar