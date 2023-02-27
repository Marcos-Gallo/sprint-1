import React from 'react'
import UpPart from './UpPart/UpPart.jsx'
import DownPart from './DownPart/DownPart'
import './Hero.css'

export default function Hero() {
    return (
        <div className="hero-box">
            <UpPart />
            <DownPart />
        </div>
    )
}
