import React from 'react'
import './controls.css';

interface ControlsProps {
  transfer: (direction: "left" | "right") => void;
  count: {
    left: number;
    right: number;
    leftSelected: number;
    rightSelected: number;
  };
}

const Controls:React.FC<ControlsProps> = ({ transfer, count }) => {
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

export default Controls