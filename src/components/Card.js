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

  const { items, addToCart } = useContext(CartContext);
  const { increaseCount } = useContext(ProductContext)
  // const [count, setCount] = useState(0)
  


  // const showCountOfType = (i) => {
  //   return props.count[i]
  // }
// I don't know about this situation
  // const typeCount = showCountOfType(0);

  return (
    <div className="Card" key={props.id}>
     <img className="productImage"  title={props.name} alt={props.name} src={props.image}></img>
     <div>{props.name}</div>


     {/* if an object has a "type" value that isn't null, adds a select menu to choose which version of the object to add */}
     {props.type ? <DropDownMenu type={props.type} /> :null}

     {/* a container that houses the buttons for the user to add and subtract products*/}
     <div className='priceAndAmount'>       
       <div className='price'>${props.price}</div>
       <div className='addAndSubtract' >{minus}</div>
       <div className='amountAdded'>{props.count}</div>
       <div className='addAndSubtract' onClick={() => {increaseCount(props.section, props.id, props.count); addToCart( props.name, props.price[0], props.count)}}>{plus}</div>
      </div>
     <div></div>
    

    </div>
  );
}

export default Card;