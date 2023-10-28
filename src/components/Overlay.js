import React, {useEffect, useState } from 'react'

function Overlay({object, clicked, setClicked, setObj, price, setPrice}) {
  //console.log(object);
  function handleErase(item){
    const newItem = object.filter(obj => obj !== item);
    setObj(newItem);
  }
  return (
    <div className="overlay" style={{display: clicked ? "block" : "none"}}>
        <div className="drawer d-flex flex-column p-30">
          <div className='d-flex justify-between align-center mb-25'>
            <h3>Корзина</h3>
            <img className="btn" width={32} height={32} src="./img/erase.png" alt="del" onClick={() => setClicked(prev => !prev)} />
          </div>
          {object.map(item => {
            return <div className="itemCart d-flex align-center">
              <img width={75} height={75} src={item.item.img} alt={item.item.text} />
              <div className="itemInfo d-flex flex-column ml-10">
                <p>{item.item.text}</p>
                <span><b>{item.item.price} руб.</b></span>
                <span>Количество: {item.num}</span>
            </div>
            <img className="btn" width={32} height={32} src="./img/erase.png" alt="del" onClick={() => handleErase(item)}/>
            </div>
          })}

          <div className="priceBlock d-flex flex-column">
            <div className="price d-flex align-center justify-between">
              <p>Итого</p>
              <div className="line"></div>
              <span>{price}</span>
            </div>
            <div className="tax d-flex align-center justify-between">
              <p>Налог 5%</p>
              <div className="line"></div>
              <span>`{price * 0.05}</span>
            </div>
            <button className="btn">Оформить заказ</button>
          </div>
        </div>
        
      </div>
  )
}

export default Overlay