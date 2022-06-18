import '../style/CheckOut.css';
import { useState } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
import CheckOutCards from './CheckOutCards'
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';

function CheckOut(props) {

  const { items } = useContext(CartContext);
  const whatsInTheBox = () =>{
    items.map((item) => (
      
      console.log("Order item: " + item.name + " Number in order: " + item.count)

    ))    
  }

  whatsInTheBox()
  return (
    <div id='CheckOut'>
      <div className='sectionText'>Let's Checkout!</div>
      <div className='divider'></div>
      <div id='checkoutInnerPage'>
      {items.map((item) => (
        
        <CheckOutCards image={item.image} type={item.type} name={item.name} price={item.price} count={item.count}/>
        

      ))}
      </div>
    </div>
  );
}

export default CheckOut;