import '../style/Shop.css';
import Card from './Card'
import CartContext from './cartContext'
import { useContext } from "react"


function Shop(props) {

  const { items } = useContext(CartContext);
  // const food = props.food;
  // const setFood = () =>{
    
  // }

  // const incrementFood = (count) =>{
  //   props.incrementFood(count)
  //   console.log(count)
  // }

  return (
    <div id="Shop">

      {/* Menu sections start with food */}
      <div className='sectionText'>Menu</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.food.map((food) => {
                      return <div key={food.id} >
                          <Card  id ={food.id} image={food.image} name={food.name} price={food.price} type={food.type} count={food.count} />
                          </div>;
                    })}</div>

      {/* menu section for coffee and tea */}
      <div className='sectionText'>Coffee and Tea</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.coffeeAndTea.map((coffeeAndTea) => {
                      return (
                          <Card  id={coffeeAndTea.id} key={coffeeAndTea.id} image={coffeeAndTea.image} name={coffeeAndTea.name} price={coffeeAndTea.price} type={coffeeAndTea.type} count={coffeeAndTea.count} />
                          )
                    })}</div>

      {/* menu section for local beers */}
      <div className='sectionText'>Local Beer</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.localBeer.map((localBeer) => {
                      return <div key={localBeer.id} >
                          <Card  id ={localBeer.id} image={localBeer.image} name={localBeer.name} price={localBeer.price} type={localBeer.type} count={localBeer.count} />
                          </div>;
                    })}</div>

    </div>
      
  );
}

export default Shop;