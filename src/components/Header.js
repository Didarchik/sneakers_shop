import React, { useState, useEffect } from 'react'
import Overlay from './Overlay';
import {Link} from "react-router-dom";
import axios from 'axios';

function Header({object, setObj}) {
  const [clicked, setClicked] = useState(false);
  function handleClick(){
    setClicked(prev => !prev);
  }
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(0);
    object.map(item => setPrice(prev => prev + parseInt(item.price)));
  }, [object])
  return (
      <div className="header d-flex justify-between align-center p-30">
        <Overlay 
          object={object} clicked={clicked} setClicked={setClicked} setObj={setObj}
          price={price} setPrice={setPrice}  
        />
        <Link to="/"><div className='leftHeader d-flex align-center'>
          <img width={50} height={50} src='/img/logo.png' alt='logo'/>
          <div className='headerInfo pl-30 d-flex flex-column'>
            <h3 className='text-uppercase pb-5'>React Didar</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className='rightHeader d-flex'>
          <li className='mr-20 d-flex'>
            <img className='bagTop' width={18} height={18} src='/img/bag.svg' onClick={handleClick} />
            <span className="ml-5">{price}</span>
          </li>
          <li className='mr-20 d-flex'>
            <Link to="/items"><img width={18} height={18} src='/img/like.svg'/></Link>
            <span className="ml-5">Закладки</span>
          </li>
          <li className='mr-20 d-flex'>
            <img width={18} height={18} src='/img/account.svg'/>
            <Link to="/test" ><span className="ml-5">Профиль</span></Link>
          </li>
        </ul>
      </div>
  )
}

export default Header