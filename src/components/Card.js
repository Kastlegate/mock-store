import '../style/Card.css';
import DropDownMenu from './DropDownMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faMinus)

function Card(props) {

  const plus = <FontAwesomeIcon icon="fa-solid fa-plus" />
  const minus = <FontAwesomeIcon icon="fa-solid fa-minus" />

  return (
    <div className="Card" key={props.id}>
     <img className="productImage"  title={props.name} alt={props.name} src={props.image}></img>
     <div>{props.name}</div>
     {props.size ? <DropDownMenu type={props.size} /> :null}
     {props.type ? <DropDownMenu type={props.type} /> :null}
     <div>{props.price}</div>
     <div>{plus}{minus}</div>
    

    </div>
  );
}

export default Card;