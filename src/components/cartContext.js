import { createContext, useState, useEffect } from "react";
import { useContext } from "react"
import ProductContext from './Products'

// creates a react context hook
const CartContext = createContext();

// creates a provider for the context so the context can ba passed to different components
export function CartProvider({ children }){
    //creates the items array in state to be used in the cart
    const [items, setItems] = useState([]);
    const { food, coffeeAndTea, localBeer } = useContext(ProductContext);
    const [total, setTotal] = useState(0);

    const updateTotal = (array) =>{
        let updatedTotal = 0;
        array.forEach(element  => {
            updatedTotal = updatedTotal + (element.price * element.count);
            console.log(element.price + " x " + element.count)
            })
            setTotal(updatedTotal.toFixed(2))
            
    }
    
    // function that returns the amount of an item that are in the cart
    const returnCount = (typeIndex, section, id) => {
        if(section === "food"){
         let i = food.findIndex(x => x.id===id);   
         return food[i].count[typeIndex];         
        }
        else if(section === "coffeeAndTea"){
          let i = coffeeAndTea.findIndex(x => x.id===id);
          return coffeeAndTea[i].count[typeIndex]
        }
        else if(section === 'localBeer'){
          let i = localBeer.findIndex(x => x.id===id);
          return localBeer[i].count[typeIndex]
        }
         
      };


    //creates a function to add items to the items array for the cart     
    const addToCart = (image, type, name, price, id, typeIndex, section ) => {
        if(type === null){
            type = "";
        }
        let count = returnCount(typeIndex, section, id);
        // creates a new ID to search for to stop duplication divs of the products
        let newId = type+name;
        // if the items array has at least one product
        if(items.length > 0)  {
            // grabs the products index if it exists by searching for the newId            
            let index = items.findIndex(e => e.newId===newId);
            
            // if the product does not exist, this adds it
            if(index === -1){
                setItems((prevState) => [...prevState, { image, type, name, price, count, id, newId, typeIndex, section } ]);
            }
            // creates a duplicate array to update the count of added items
            else if (items[index].newId === newId){
                const newItems = [...items]
                newItems[index] = { image, type, name, price, count, id, newId, typeIndex, section };    
                // saves the new array over the previous one.            
                setItems([...newItems ]);
                
            }
            // if the newId is not the same as one that is already added, it adds the new product
            else if(items[index].newId !== newId){               
                setItems((prevState) => [...prevState, { image, type, name, price, count, id, newId, typeIndex, section  } ]);
            }   
        }
        // if the items array does not have at least one product this adds the first product
        else{
            setItems((prevState) => [...prevState, { image, type, name, price, count, id, newId, typeIndex, section  } ]);

        }
        
    };

    useEffect(() => {   updateTotal(items)  });
    
    return(
        // sends the items array and addToCart function to any children inside the cart provider component
        <CartContext.Provider value={{ items, setItems, addToCart, total, updateTotal }}>
            {children} 
        </CartContext.Provider>
    );
}

export default CartContext;