import React from 'react'
import ParticleComponent from '../ParticleComponent';
import './nav.css';

function Nav() {
    return (
        <div className='nav-wrapper'>
            <ParticleComponent val={80} />
            <p>Bhola bhaia</p>
        </div>
    )
}

export default Nav