import { createContext, useState, useEffect } from "react";
import { useContext } from "react"
import ProductContext from './Products'

// creates a react context hook
const CartContext = createContext();

// creates a provider for the context so the context can ba passed to different components
export function CartProvider({ children }){
    //creates the items array in state to be used in the cart
    const [items, setItems] = useState([]);
    const [addedCount, setAddedCount] = useState(0)
    const { increaseCount, food, coffeeAndTea, localBeer } = useContext(ProductContext);



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
            // removes the same item and readds it to the array with the updated item count 
            else if (items[index].newId === newId){
                console.log(index)
                
                setItems(items.filter((item) => item.newId !== newId))
                setItems((prevState) => [...prevState, { image, type, name, price, count, id, newId, typeIndex, section  } ]);
               
                      
                
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

    return(
        // sends the items array and addToCart function to any children inside the cart provider component
        <CartContext.Provider value={{ items, setItems, addToCart }}>
            {children} 
        </CartContext.Provider>
    );
}

export default CartContext;