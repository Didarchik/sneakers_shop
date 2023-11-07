import React, {useState } from "react";
import {Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom/client";
import './styles/App.css';
import Content from "./components/Content";
import Header from "./components/Header";
import obj from "./components/data";
import Profile from "./components/Profile";

function App({object, setObj, addItem}) {
  
  return (
      <div className="wrapper clear">
        <Header object={object} setObj={setObj} />
        <Content object={object} setObj={setObj} addItem={addItem}/>
        <Routes>
          <Route path="/page" element={<Profile />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>       
      </div>
    
  );
}

export default App

