import React from 'react'
import './NavBar.css'
import NavLogo from '../../images/logom.svg'

export default function NavBar() {
    return (
        <div className='navbar-box'>
            <button className='navbar-button'>
            </button>
            <img className='navbar-logo' src={NavLogo} alt="logo-m" >
            </img>
        </div>
    )
}
