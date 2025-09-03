import { useState } from 'react'
import './App.css'
import CheckedList from './components/checked-list/checked-list'
import Controls from './components/controls/controls';

function App() {

  const [leftList, setLeftList] = useState(['HTML', 'Javascript', 'Typescript', 'CSS']);
  const [righttList, setRightList] = useState(['React', 'Remix', 'Next', 'Angular']);

  // selection
  const [leftSelected, setLeftSelected] = useState([]);
  const [rightSelected, setRightSelected] = useState([]);

  // function to perform the selection
  const handleSelect = (item: string, direction: "left" | "right") => {
    console.log(item, direction)
    if (direction == 'left') {
      setLeftSelected(prev => [...prev, item]);
    } else {
      setRightSelected(prev => [...prev, item]);
    }
  }

  // To transfer while clicking on the buttons
  const transferList = (direction: "left" | "right") => {
    if (direction == 'right') {
      const newRightList = [...righttList, ...leftSelected];
      const newLeftList = leftList.filter((item: string) => !leftSelected.includes(item));
      setRightList(newRightList);
      setLeftList(newLeftList);
      // console.log(leftSelected, newLeftList);
    }
    else {
      const newLeftList = [...leftList, ...rightSelected];
      const newRightList = righttList.filter((item: string) => !rightSelected.includes(item));
      setRightList(newRightList);
      setLeftList(newLeftList);
      // console.log(leftSelected, newLeftList);
    }
  }

  return (
    <>
      <h2>Transfer The Checked List</h2>
      <div className='list-container'>
        <CheckedList list={leftList} direction={'left'} onSelect={handleSelect} />
        <Controls transfer={transferList} count={{ left: leftList.length, right: righttList.length }} />
        <CheckedList list={righttList} direction={'right'} onSelect={handleSelect} />
      </div>
    </>
  )
}

export default App
