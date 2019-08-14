import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let ingredients = adaptIngredients(props.ingredients);
    if (ingredients.length === 0){
        ingredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

function adaptIngredients(ingredients) {
    return Object.keys(ingredients)
        .map(key => {
            return [...Array(ingredients[key])]
                .map((_, index) => {
                    return <BurgerIngredient key={key + index} type={key}/>
                })
        })
        .reduce((arr, el) => arr.concat(el), []);
}

export default burger;