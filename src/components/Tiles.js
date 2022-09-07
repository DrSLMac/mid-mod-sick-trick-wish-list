import React from 'react'
import './Tiles.css'

const Tiles = ({ id, name, obstacle, stance, tutorial, deleteTrick }) => {
    return (
        <div className='tiles'>
            <h2>Sick Trick</h2>
            <h2>Name: {name}</h2>
            <h2>Obstacle: {obstacle}</h2>
            <h2>Stance: {stance}</h2>
            <p>Tutorial: {tutorial}</p>
            <button onClick={() => deleteTrick(id)}>🗑</button>
        </div>
    )
}

export default Tiles