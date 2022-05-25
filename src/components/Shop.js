import '../style/Shop.css';
import Card from './Card'


function Shop(props) {

  // const data = fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  //           const product1 =  data.json();
console.log(props.products.length)
  return (
    <div id="Shop">
      Shop Page
      {/* <Card name="Product Name" price="9.99"/> */}
      {props.products.map((product) => {
                      return <div key={product.id} >
                          <Card  name={product.name} hello price={product.price} />
                          </div>;
                    })}
    </div>
  );
}

export default Shop;