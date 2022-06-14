import { createContext, useState } from "react";

// creates a react context hook
const CartContext = createContext();

// creates a provider for the context so the context can ba passed to different components
export function CartProvider({ children }){
    //creates the items array in state to be used in the cart
    const [items, setItems] = useState([]);
    const [addedCount, setAddedCount] = useState(0)
    //creates a function to add items to the items array for the cart 
    
    const addToCart = (type, name, price, count ) => {
        setAddedCount((prevState) => (  count + 1 ));
        // console.log(count)
        setItems((prevState) => [...prevState, { type, name, price, count }]);
        
    };

    return(
        // sends the items array and addToCart function to any children inside the car provider component
        <CartContext.Provider value={{ items, addToCart }}>
            {children} 
        </CartContext.Provider>
    );
}

export default CartContext;