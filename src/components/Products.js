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

const Food = [
    {
        id: 'uniqid()',
        image: beignets,        
        name: "Beignets",
        price: 3.99,
        type: null,
        count: 0
    },
    {
        id: uniqid(),
        image: gumbo,       
        name: "Chicken Andouille Gumbo",
        price: 4.99,
        type: ['Cup', 'Bowl'],
        count: 0
    },
    {
        id: uniqid(),
        image: muffaletta,
        name: "Muffaletta",
        price: 9.99,
        type: null,
        count: 0
    },

]

const CoffeeAndTea = [
    {
        id: uniqid(),
        image: cafeaulait,       
        name: "Cafe Au Lait",
        price: 3.99,
        type: ['Hot', 'Iced'],
        count: 0
    },

    {
        id: uniqid(),
        image: latte,       
        name: "Latte",
        price: 4.99,
        type: ['Hazelnut', 'Vanilla', 'Caramel'],
        count: 0
    },
    {
        id: uniqid(),
        image: tea,
        name: "Tea",
        price: 3,
        type: ['Earl Grey', 'Green Tea', 'BlackTea'],
        count: 0
    },
    {
        id: uniqid(),
        image: italiansoda,        
        name: "Italian Soda",
        price: 4.50,
        type: ['Strawberry',],
        count: 0
    },
   
]

const LocalBeer = [
    {
        id: uniqid(),
        image: bluestallion,       
        name: "Blue Stallion",
        price: 5,
        type: ['Dunkel', 'Cold Czech'],
        count: 0
    },
    {
        id: uniqid(),
        image: ethereal,
        name: "Ethereal",
        price: 5,
        type: ['Lake Hazy IPA', 'Fallziskie'],
        count: 0
    },
    {
        id: uniqid(),
        image: westsixth,        
        name: "West Sixth Brewing Company",
        price: 5,
        type: ['Cerveza', 'Amber Ale'],
        count: 0
    },
    {
        id: uniqid(),
        image: lexbrew,        
        name: "Lexington Brewing and Distilling Company",
        price: 5,
        type: ['Bourbon Barrel Ale', 'Vanilla Cream Ale'],
        count: 0
    }
]

export { Food, CoffeeAndTea, LocalBeer };