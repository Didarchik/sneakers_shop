import React, {useState } from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Content from "./Content";
import Header from "./Header";
import obj from "./data";

function App({object, setObj, addItem}) {
  
  return (
      <div className="wrapper clear">
        <Header object={object} setObj={setObj} />
        <Content object={object} setObj={setObj} addItem={addItem}/>
      </div>
    
  );
}

export default App

