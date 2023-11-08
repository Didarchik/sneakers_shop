import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Ordered({object}) {
  const [ordered, setOrdered] = useState([]);
  useEffect(() => {
    axios.get("https://654662eafe036a2fa9559b2c.mockapi.io/cart").then(res => {
        setOrdered(res.data);
    })
  }, [object]);
  
  return (
    <div className='ml-40'>
        <h1>Мои покупки</h1>
        <div className='d-flex flex-wrap'>
            {ordered.map(item => (
                <div className='card mr-40' key={item.id}>
                    <img width={133} height={112} src={item.img} alt={item.text} />
                    <p>{item.text}</p>
                    <div className='d-flex align-center justify-between'>
                        <div className='d-flex flex-column'>
                            <span className='text-uppercase'>Цена</span>
                            <b>{item.price} руб.</b>
                        </div>
                        <button className='button'>+</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Ordered