import React, { createContext, useEffect, useState } from "react";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/Profile";
import axios from 'axios';

function Before() {
  const [object, setObj] = useState([]);
  function addItem(newItem){
    const numberOfItem = object.reduce((count, item) => (item.id === newItem.id ? count + 1 : count), 1);
    const index = object.findIndex(item => item.id == newItem.id);
    if (index === -1){
      const newObj = {...newItem, num: numberOfItem};
      axios.post("https://654662eafe036a2fa9559b2c.mockapi.io/cart", newObj).then(res => {
        console.log("Added");
      })
      setObj(prev => [...prev, newObj]);
    }
    else{
      const objectUpdate = {...object[index], num: object[index].num + 1};
      const objectNew = [...object];
      objectNew[index] = objectUpdate;
        
      setObj(objectNew);
    }
  }
  return (
    <div>
      <Router>
        <App object={object} setObj={setObj} addItem={addItem}/> 
      </Router>
    </div>
  )
}

export default Before