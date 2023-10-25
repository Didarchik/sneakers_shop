import React, { createContext, useState } from "react";
import App from './App';


function Before() {
  const [object, setObj] = useState([]);
  function addItem(newItem){
    const numberOfItem = object.reduce((count, item) => (item.id === newItem.id ? count + 1 : count), 1);
    const index = object.findIndex(item => item.id == newItem.id);
    if (index === -1){
      const newObj = {id: newItem.id, item: newItem, num: numberOfItem};
      setObj(prev => [...prev, newObj]);
    }
    else{
      const objectUpdate = {...object[index], num: object[index].num + 1};
      const objectNew = [...object];
      objectNew[index] = objectUpdate;
      setObj(objectNew);
    }
  }
  console.log(object);
  return (
    <div>
        <App object={object} setObj={setObj} addItem={addItem}/>
    </div>
  )
}

export default Before