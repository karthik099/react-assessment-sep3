import React from 'react'
import './controls.css';
const controls = ({ transfer, count }) => {
    return (
        <div className='controls-wrap'>
            <button
                className='btn mb-10'
                disabled={!count.left || count.rightSelected}
                onClick={() => transfer('right')}>
                🡲
            </button>
            <button
                className='btn mb-10'
                disabled={!count.right || count.leftSelected}
                onClick={() => transfer('left')}>
                🡰
            </button>
        </div>
    )
}

export default controls