import beignets from '../img/beignets.jpg'
import bluestallion from '../img/blueStallion.jpg'
import cafeaulait from '../img/cafeaulait.jpg'
import ethereal from '../img/ethereal.png'
import gumbo from '../img/gumbo.jpg'
import italiansoda from '../img/italianSoda.jpg'
import latte from '../img/latte.jpg'
import lexbrew from '../img/lexBrew.jpg'
import muffaletta from '../img/muffaletta.jpg'
import tea from '../img/tea.jpg'
import westsixth from '../img/westsixth.jpg'
import uniqid from "uniqid";
import { createContext, useContext, useState } from "react";

const Food = [
    {
        id: uniqid(),
        section: "food",
        image: beignets,        
        name: "Beignets (order of 3)",
        price: [3.99],
        type: null,
        count: [0]
    },
    {
        id: uniqid(),
        section: "food",
        image: gumbo,       
        name: "Chicken Andouille Gumbo",
        price: [4.99, 9.99],
        type: ['Cup', 'Bowl'],
        count: [0, 0]
    },
    {
        id: uniqid(),
        section: "food",
        image: muffaletta,
        name: "Muffaletta",
        price: [9.99],
        type: null,
        count: [0]
    },

]

const CoffeeAndTea = [
    {
        id: uniqid(),
        section: "coffeeAndTea",
        image: cafeaulait,       
        name: "Cafe Au Lait",
        price: [3.99, 3.99],
        type: ['Hot', 'Iced'],
        count: [0, 0]
    },

    {
        id: uniqid(),
        section: "coffeeAndTea",
        image: latte,       
        name: "Latte",
        price: [4.99, 4.99, 4.99],
        type: ['Hazelnut', 'Vanilla', 'Caramel'],
        count: [0, 0, 0]
    },
    {
        id: uniqid(),
        section: "coffeeAndTea",
        image: tea,
        name: "Tea",
        price: [3, 3, 3],
        type: ['Earl Grey', 'Green Tea', 'BlackTea'],
        count: [0, 0, 0]
    },
    {
        id: uniqid(),
        image: italiansoda, 
        section: "coffeeAndTea",       
        name: "Italian Soda",
        price: [4.50, 4.50],
        type: ['Strawberry', 'Lemon'],
        count: [0, 0]
    },
   
]

const LocalBeer = [
    {
        id: uniqid(),
        section: "localBeer",
        image: bluestallion,       
        name: "Blue Stallion",
        price: [5, 5],
        type: ['Dunkel', 'Cold Czech'],
        count: [0, 0]
    },
    {
        id: uniqid(),
        section: "localBeer",
        image: ethereal,
        name: "Ethereal",
        price: [5, 5],
        type: ['Lake Hazy IPA', 'Fallziskie'],
        count: [0, 0]
    },
    {
        id: uniqid(),
        section: "localBeer",
        image: westsixth,        
        name: "West Sixth Brewing Company",
        price: [5, 5],
        type: ['Cerveza', 'Amber Ale'],
        count: [0, 0]
    },
    {
        id: uniqid(),
        section: "localBeer",
        image: lexbrew,        
        name: "Lexington Brewing and Distilling Company",
        price: [5, 5],
        type: ['Bourbon Barrel Ale', 'Vanilla Cream Ale'],
        count: [0, 0]
    }
]

// creates a react context hook
const ProductContext = createContext();

// creates a provider for the context so the context can ba passed to different components
export function ProductProvider({ children }){
    //creates
    const [food, setFood] = useState(Food);
    const [coffeeAndTea, setCoffeeAndTea] = useState(CoffeeAndTea);
    const [localBeer, setLocalBeer] = useState(LocalBeer);
    const [count, setCount] = useState(0);

    // a function that increases the amount of an item that has been added to the cart
    const increaseCount = (section, id, typeIndex) => {
       if(section === "food"){
        let i = food.findIndex(x => x.id===id);
        setCount(food[i].count[typeIndex] = food[i].count[typeIndex] + 1)
        setFood(prevState => [...food]);
       }
       else if(section === "coffeeAndTea"){
        let i = coffeeAndTea.findIndex(x => x.id===id);
        setCount(coffeeAndTea[i].count[typeIndex] = coffeeAndTea[i].count[typeIndex] + 1)
        setCoffeeAndTea(prevState => [...coffeeAndTea]);
       }
       else if(section === 'localBeer'){
        let i = localBeer.findIndex(x => x.id===id);
        setCount(localBeer[i].count[typeIndex] = localBeer[i].count[typeIndex] + 1)
        setLocalBeer(prevState => [...localBeer]);
       }
        
    };

    // a function that decreases the amount of an item that has been added to the cart
    const decreaseCount = (section, id, typeIndex) => {
        if(section === "food"){
            let i = food.findIndex(x => x.id===id);
            if(food[i].count[typeIndex] > 0){
            setCount(food[i].count[typeIndex] = food[i].count[typeIndex] - 1)
            setFood(prevState => [...food]);
            }
        }
        else if(section === "coffeeAndTea"){
            let i = coffeeAndTea.findIndex(x => x.id===id);
            if(coffeeAndTea[i].count[typeIndex] > 0){
            setCount(coffeeAndTea[i].count[typeIndex] = coffeeAndTea[i].count[typeIndex] - 1)
            setCoffeeAndTea(prevState => [...coffeeAndTea]);
            }            
        }
        else if(section === 'localBeer'){
            let i = localBeer.findIndex(x => x.id===id);
            if(localBeer[i].count[typeIndex] > 0){
            setCount(localBeer[i].count[typeIndex] = localBeer[i].count[typeIndex] - 1)
            setLocalBeer(prevState => [...localBeer]);
            }
        }             
        };

    return(
        // sends the items array and addToCart function to any children inside the car provider component
        <ProductContext.Provider value={{ food, coffeeAndTea, localBeer, increaseCount, decreaseCount }}>
            {children} 
        </ProductContext.Provider>
    );
}

export default ProductContext;

// export { Food, CoffeeAndTea, LocalBeer };