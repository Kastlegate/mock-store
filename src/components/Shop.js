import '../style/Shop.css';
import Card from './Card'


function Shop(props) {

  return (
    <div id="Shop">
      {/* Menu sections start with food */}
      <div className='sectionText'>Menu</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.food.map((food) => {
                      return <div key={food.id} >
                          <Card  image={food.image} name={food.name} price={food.price} type={food.type} size={food.size}/>
                          </div>;
                    })}</div>
                    {/* menu section for coffee and tea */}
      <div className='sectionText'>Coffee and Tea</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.coffeeAndTea.map((coffeeAndTea) => {
                      return (
                          <Card  key={coffeeAndTea.id} image={coffeeAndTea.image} name={coffeeAndTea.name} price={coffeeAndTea.price} type={coffeeAndTea.type} />
                          )
                    })}</div>
                    {/* menu section for local beers */}
      <div className='sectionText'>Local Beer</div>
      <div className='divider'></div>
      <div className='productContainer'>{props.localBeer.map((localBeer) => {
                      return <div key={localBeer.id} >
                          <Card  image={localBeer.image} name={localBeer.name} price={localBeer.price} type={localBeer.type} />
                          </div>;
                    })}</div>

    </div>
      
  );
}

export default Shop;