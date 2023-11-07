import React, { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Content({object, setObj, addItem}) {
  const [search, setSearch] = useState("");
  const [sneakers, setSneakers] = useState([]);
  useEffect(() => {
    axios.get("https://654662eafe036a2fa9559b2c.mockapi.io/items").then(response => {
      setSneakers(response.data);
    });
  }, []);

  return (
    <div className='content p-30'> 
        <div className='d-flex align-center justify-between mb-30'>
          <h1>All sneakers</h1>
          <div className='search d-flex'>
            <img src='/img/search.svg' />
            <input placeholder='Поиск...' className='pl-5' onChange={e => setSearch(e.target.value)}/>
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {sneakers.map((item) => {
            if (item.text.toLowerCase().includes(search.toLowerCase()))
              return <div className='card mr-40' key={item.id}>
                <img width={133} height={112} src={item.img} alt='1' />
                <p>{item.text}</p>
                <div className='d-flex justify-between align-center'>
                  <div className='d-flex flex-column'>
                    <span className="text-uppercase">Цена:</span>
                    <b>{item.price} руб.</b>
                  </div>
                  <button className='button' onClick={() => addItem(item)}>+</button>
                </div>
              </div>
          })}


          
          </div>
        </div>
  )
}

export default Content