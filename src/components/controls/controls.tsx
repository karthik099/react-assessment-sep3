import React from 'react'
import './controls.css';
const controls = ({ transfer, count }) => {
    return (
        <div className='controls-wrap'>
            <button
                className='mb-10'
                disabled={!count.left}
                onClick={() => transfer('right')}>
                🡲
            </button>
            <button
                className='mb-10'
                disabled={!count.right}
                onClick={() => transfer('left')}>
                🡰
            </button>
        </div>
    )
}

export default controls