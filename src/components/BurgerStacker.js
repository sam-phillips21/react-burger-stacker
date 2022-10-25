

import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
const BurgerStacker = () =>  {
//     // state = {
        const ingredientArr = [ 
            {name: ('Kaiser Bun'), color: ('saddlebrown')},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
        ]
//         ,
//         // const [burgerIngredients] = useState([])
//     }
    const [ingredients, setIngredients] = useState(ingredientArr)
    const [burgerIngredients, setBurgerIngredients] = useState([])
    // this function adds items to the burgerIngredients array, which allows burgerPane to render them
    const addToStack = (ingredient) => {
        
        setBurgerIngredients([...burgerIngredients, ingredient])
    }

    // this function will clear the burgerPane, passed as a prop to that component, but lives here so it can setState
    const clearBurger = () => {
        
         setBurgerIngredients([])
        }
    

    // this function will remove one ingredient from the burger
    const removeFromStack = (e) => {
        console.log('the old stack',burgerIngredients)
        console.log('this is the clicked item \n', e.target)
        // we need to find the ingredient's location within the array
        const clickIndex = e.target.id
        console.log('this is clickIndex', clickIndex)
        // then, its helpful to have a copy of the original array
        const currBurger = burgerIngredients.slice()
        console.log('this is the current burger', currBurger)
        // then we need to remove an item from the copy of the array
        currBurger.splice(clickIndex, 1)
        console.log('this is the current burger after splice', currBurger)
        // then we can set state with the copy.
        // this.setState({
        //     burgerIngredients: currBurger
        // })
        setBurgerIngredients(currBurger)
    }

    
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={ingredientArr}
                        add={addToStack}
                    />
                    <BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
                </div>
            </div>
        )
        }

        export default BurgerStacker