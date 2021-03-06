import '../style/CheckOutCards.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
import ProductContext from './Products'
library.add(faPlus, faMinus)

function CheckOutCardsCard(props) {

  const plus = <FontAwesomeIcon icon="fa-solid fa-plus" />
  const minus = <FontAwesomeIcon icon="fa-solid fa-minus" />

  // creates contexts from the cart and products contexts to add to the cart and update the item counts
  
  const { items, addToCart, displayTotal } = useContext(CartContext);
  const { increaseCount, decreaseCount } = useContext(ProductContext);

    // function that checks if there is a type and returns it if true so it can be passed to the checkout
   const bypassNull = () => {
     
    if (props.type !== null){
      return props.type;
    }
   }


  return (
    <div className="CheckOutCard" key={props.id} id={props.id}>
     <img className="checkOutProductImage" title={props.name} alt={props.name} src={props.image}></img>
     {/* organizes the type, name, and price of the item in the cart */}
    <div className='checkOutItemInfo'>     
      <div>{bypassNull()}</div>
      <div>{props.name}</div>
      <div>${props.price}</div> 
    </div>
    {/* organizes the add, subtract, and current count of the item in the cart */}
    <div className='checkoutCurrentCountInfo'>      
      <div className='currentCountItems'onClick={() => {decreaseCount(props.section, props.id, props.typeIndex); addToCart( props.image, bypassNull(), props.name, props.price, props.id, props.typeIndex, props.section, true); }}>{minus}</div>
      <div className='currentCountItems'>{props.count}</div>
      <div className='currentCountItems' onClick={() => {increaseCount(props.section, props.id, props.typeIndex); addToCart( props.image, bypassNull(), props.name, props.price, props.id, props.typeIndex, props.section); }}>{plus}</div>
    </div>
    </div>
  );
}

export default CheckOutCardsCard;