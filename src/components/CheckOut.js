import '../style/CheckOut.css';
import { useState, useEffect } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
import CheckOutCards from './CheckOutCards'

function CheckOut(props) {

  const { items } = useContext(CartContext); 
  return (
    <div id='CheckOut'>
      <div className='sectionText'>Let's Checkout!</div>
      {/* <div className='divider'></div> */}
      <div id='checkoutInnerPage'>
      {items.map((item) => (
        <CheckOutCards id={item.id} image={item.image} type={item.type} name={item.name} price={item.price} count={item.count} typeIndex={item.typeIndex} section={item.section}  />
        

      ))}
      </div>
    </div>
  );
}

export default CheckOut;