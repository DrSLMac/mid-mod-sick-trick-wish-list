import React from 'react'
import './Tiles.css'

const Tiles = ({ id, name, obstacle, stance, tutorial }) => {
    return (
        <div className='tiles'>
            <h2>Sick Trick</h2>
            <h2>Name: {name}</h2>
            <h2>Obstacle: {obstacle}</h2>
            <h2>Stance: {stance}</h2>
            <p>Tutorial: {tutorial}</p>
            <button>🗑</button>
        </div>
    )
}

export default Tiles