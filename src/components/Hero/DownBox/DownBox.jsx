import React from 'react'
import './DownBox.css'
import Baku from '../../../images/baku-hero.svg'
import Academy from '../../../images/hero-acad.svg'


export default function DownBox() {
    return (
        <div className='bottom-box'>
            <img className='baku-img' src={Baku} alt="-baku-img"></img>
            <img className='academy-img' src={Academy} alt="academy-img" />
            <div className='bottom-texts'>
                <h2 className=''>My Hero Academy</h2>
                <p>Manga</p>
                <p>In a world in which most of the population is born with a Gift, a different extraordinary ability in each one, it didn't take long for both villains and heroes to appear ready to stop them.</p>

            </div>


        </div>
    )
}
