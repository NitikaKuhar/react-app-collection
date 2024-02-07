import React, {useState} from 'react';
import './styles.css';

const LEFT_ITEMS = [
  {
    name:'HTML',
    isChecked: false
  },
  {
    name:'Javascript',
    isChecked: false
  },
  {
    name:'CSS',
    isChecked: false
  },
  {
    name:'Typescript',
    isChecked: false
  }
];

const RIGHT_ITEMS = [
  {
    name:'React',
    isChecked: false
  },
  {
    name:'Angular',
    isChecked: false
  },
  {
    name:'Vue',
    isChecked: false
  },
  {
    name:'Svelte',
    isChecked: false
  }
];


export default function App() {

  const [leftItems, setLeftOtems] = useState(LEFT_ITEMS);
  const [rightItems, setRightItems] = useState(RIGHT_ITEMS);
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
   const [selectedRightItems, setSelectedRightItems] = useState([])

  const onCheckboxClick = (item, itemDirection) =>{
    if(itemDirection === 'left'){
      
        setSelectedLeftItems([...selectedLeftItems, item])
        console.log
    }
    else{
      setSelectedRightItems([...selectedRightItems, item])
    }
  }

  const arrowClick = (arrow) =>{
    if(arrow === '<<'){
      setLeftOtems([...leftItems, ...rightItems]);
      setRightItems([])

    }
    else if(arrow === '<'){
      setLeftOtems([...leftItems, ...selectedRightItems]);
      const filterRightItems = rightItems.filter((item) => !selectedRightItems.includes(item.name, 0));
      setRightItems(filterRightItems);
      setSelectedRightItems([]);
    }
    else if(arrow === '>'){
      setRightItems([...rightItems, ...selectedLeftItems]);
      const filterLeftItems = leftItems.filter((item) => !selectedLeftItems.includes(item.name, 0));
      setLeftOtems(filterLeftItems)
      setSelectedLeftItems([])
    }
    else if(arrow === '>>'){
      setRightItems([...leftItems, ...rightItems])
      setLeftOtems([])
    }
  }

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="item-container">
         {
          leftItems && leftItems.map((item, id) =>{
            return (
              <div >
                <input type="checkbox" key={id} onChange={() => {
                  item.checked = !item.checked
                  onCheckboxClick(item,'left')}
                }
                checked={item.isChecked}
                value={item.name}
                   />
                  {item.name}
              </div>
              
            )
          })
         }
        </div>
        </div>
        <div className="center-container">
          <button disabled={rightItems.length ? false : true} onClick={() => arrowClick('<<')}>{"<<"}</button>
          <button disabled={selectedRightItems.length ? false : true} onClick={() => arrowClick('<')}>{"<"}</button>
          <button disabled={selectedLeftItems.length ? false : true}  onClick={() => arrowClick('>')}>{">"}</button>
          <button disabled={leftItems.length ? false : true} onClick={() => arrowClick('>>')}>{">>"}</button>
        </div>
        <div className="right-container">
          <div className="item-container">
            {
            rightItems && rightItems.map((item, id) =>{
              return (
              <div>
                  <input type="checkbox" key={id} onChange={(e) => {
                    item.checked = !item.checked
                    onCheckboxClick(e,'right')}
                  }
                  value={item.name}
                    />
                    {item.name}
                </div>
              )
            })
          }
          </div>
      </div>
    </div>
  );
}
