import React from 'react'
import LeftPart from '../LeftPart/LeftPart'
import NavBar from '../NavBar/NavBar'
import RigthPart from '../RigthPart/RigthPart'
import './Register.css'


export default function Register() {
    return (
        <div className='register-cont'>
            <LeftPart />
            <RigthPart />
            <NavBar />
        </div>
    )
}
