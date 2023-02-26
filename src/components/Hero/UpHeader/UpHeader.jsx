import React from 'react'
import './UpHeader.css'
import '../../../images/Logom.svg'
import Logo from '../../../images/Logom.svg'

export default function UpHeader() {
    return (
        <div className='header-box'>
            <button className='header-button'>
            </button>
            <img className='header-logo' src={Logo} alt="logo-m" >
            </img>
        </div>
    )
}
