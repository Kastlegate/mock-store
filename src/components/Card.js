import '../style/Card.css';
import DropDownMenu from './DropDownMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
import ProductContext from './Products'
library.add(faPlus, faMinus)

function Card(props) {

  const plus = <FontAwesomeIcon icon="fa-solid fa-plus" />
  const minus = <FontAwesomeIcon icon="fa-solid fa-minus" />

  // creates contexts from the cart and products contexts to add to the cart and update the item counts 
  const { items, addToCart, displayTotal } = useContext(CartContext);
  const { increaseCount, decreaseCount } = useContext(ProductContext);
  // creates typeindex to get the index of the currently selected type from the select menu 
  const [typeIndex, setTypeIndex] = useState(0);

  //function to let the dropDownMenuComponent update the current "type" of a menu item and pass that to the card to update the 
  // price and count of each item
  const updateTypeIndex = (index) =>{
    let newIndex = index;
   setTypeIndex(newIndex);
  }
    // function that checks if there is a type and returns it if true so it can be passed to the checkout
   const bypassNull = () => {
     
    if (props.type !== null){
      return props.type[typeIndex];
    }
   }

   

  return (
    <div className="Card" key={props.id} id={props.id}>
     <img className="productImage"  title={props.name} alt={props.name} src={props.image}></img>
     <div>{props.name}</div>


     {/* if an object has a "type" value that isn't null, adds a select menu to choose which version of the object to add */}
     {props.type ? <DropDownMenu type={props.type} id={props.id} section={props.section} updateTypeIndex={updateTypeIndex} /> :null}

     {/* a container that houses the buttons for the user to add and subtract products*/}
     <div className='priceAndAmount'>
       <div className='price'>${props.price[typeIndex]}</div>

       {/* subtract div */}
       <div className='addAndSubtract' onClick={() => {decreaseCount(props.section, props.id, typeIndex); addToCart( props.image, bypassNull(), props.name, props.price[typeIndex],  props.id, typeIndex, props.section, true);  }}>{minus}</div>

       {/* div for the added amount of each product */}
       <div className='amountAdded'>{props.count[typeIndex]}</div>

       {/* add div */}
       <div className='addAndSubtract' onClick={() => {increaseCount(props.section, props.id, typeIndex); addToCart( props.image, bypassNull(), props.name, props.price[typeIndex],  props.id, typeIndex, props.section);  }}>{plus}</div>
      </div>
     <div></div>
    

    </div>
  );
}

export default Card;