import React from 'react'
import './Tricks.css'
import Tiles from './Tiles'

const Tricks = ({ tricks }) => {
    const trickTiles = tricks.map(eachTrick => {
        return (
            <Tiles
                key={eachTrick.id}
                id={eachTrick.id}
                name={eachTrick.name}
                obstacle={eachTrick.obstacle}
                stance={eachTrick.stance}
                tutorial={eachTrick.tutorial}
            />    
        )
    })
    return (
        <div className='tricks-container'>
            <div>
           { trickTiles }
            </div>
        </div>
    )
}

export default Tricks