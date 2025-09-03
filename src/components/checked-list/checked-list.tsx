import React from 'react';
import './checked-list.css';

interface CheckedListProps {
  list: string[];
  direction: "left" | "right";
  onSelect: (item: string, direction: "left" | "right") => void;
}
const CheckedList:React.FC<CheckedListProps> = ({ list, direction, onSelect}) => {
    console.log(direction);
    return (
        <div className='checked-list'>
            { list.map((item) => (
                <label key={item}>
                    <input 
                    type='checkbox'
                    onChange={()=>onSelect(item, direction)}/>
                    {item}
                </label>
            ))}
        </div>
    )
}

export default CheckedList
