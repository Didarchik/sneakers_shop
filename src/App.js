import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Content from "./Content";
import Header from "./Header";

export const UserContext = createContext();
function App() {
  const [check, checkState] = useState("Didar top");

  const [object, setObj] = useState([]);
  function addItem(newItem){
    setObj(prev => [...prev, newItem]);
  }
  
  return (
      <div className="wrapper clear">
      <UserContext.Provider value={check}>
          <Header object={object} setObj={setObj} />
          <Content object={object} setObj={setObj} addItem={addItem}/>
        </UserContext.Provider>
        </div>
    
  );
}

export default App

