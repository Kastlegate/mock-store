import '../style/Card.css';

function Card(props) {
  return (
    <div className="Card">
     <img className="productImage"  title={props.name} src={props.src}></img>
     <div>{props.name}</div>
     <div>{props.price}</div>
    </div>
  );
}

export default Card;