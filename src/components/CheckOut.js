import '../style/CheckOut.css';
import { useState, useEffect } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
import CheckOutCards from './CheckOutCards'

function CheckOut(props) {

  const { items, total } = useContext(CartContext); 


  return (
    <div id='CheckOut'>
      <div className='sectionText'>Let's Checkout!</div>
      <div className='divider'></div>
      <div id='checkoutInnerPage'>
      <div className='sectionText' id='yourCart'>
        <div>Your Cart</div>
        <div id='emptyCart'>{items.length===0 ? "Add something to your order!" :null}</div>
      </div>
      {items.map((item) => (
        <CheckOutCards key={item.newId} id={item.id} image={item.image} type={item.type} name={item.name} price={item.price} count={item.count} typeIndex={item.typeIndex} section={item.section}  />
      ))}
      {items.length>0 ?  <div id='yourTotal'>
        The Total Price of your order is: ${total}
        <div id='orderButton'>Place Order</div>
      </div> :null}
      </div>
     
    </div>
  );
}

export default CheckOut;