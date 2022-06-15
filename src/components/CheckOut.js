import '../style/CheckOut.css';
import { useState } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"

function CheckOut(props) {

  const { items } = useContext(CartContext);

  return (
    <div id='CheckOut'>
      {items.map((item) => (
        <div className='itemInCart'> 
            
            <div>{item.type}</div>         
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.count}</div>
        </div>
      ))}
    </div>
  );
}

export default CheckOut;