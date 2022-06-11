import '../style/Card.css';
import DropDownMenu from './DropDownMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CartContext from './cartContext'
import { useContext } from "react"
library.add(faPlus, faMinus)

function Card(props) {

  const plus = <FontAwesomeIcon icon="fa-solid fa-plus" />
  const minus = <FontAwesomeIcon icon="fa-solid fa-minus" />

  const { addToCart } = useContext(CartContext);

  const [count, setCounter] = useState(0);
  const incrementCounter = (id, count) => {


  }
  const decrementCounter = (id, count) => {
    if (count > 0){
      setCounter(count - 1)
    }
    
  }

  const showCountOfType = (i) => {
    return props.count[i]
  }
// I don't know about this situation
  const typeCount = showCountOfType(0);

  return (
    <div className="Card" key={props.id}>
     <img className="productImage"  title={props.name} alt={props.name} src={props.image}></img>
     <div>{props.name}</div>


     {/* if an object has a "type" value that isn't null, adds a select menu to choose which version of the object to add */}
     {props.type ? <DropDownMenu type={props.type} /> :null}

     {/* a container that houses the buttons for the user to add and subtract products*/}
     <div className='priceAndAmount'>       
       <div className='price'>${props.price[0]}</div>
       <div className='addAndSubtract' onClick={() => {decrementCounter(props.id, props.count)}}>{minus}</div>
       <div className='amountAdded'>{typeCount}</div>
       <div className='addAndSubtract' onClick={() => {addToCart(props.name, props.price)}}>{plus}</div>
      </div>
     <div></div>
    

    </div>
  );
}

export default Card;