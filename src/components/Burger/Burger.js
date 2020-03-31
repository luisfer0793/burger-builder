import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients, price }) => {
    const ingredientsArray = ingredients.reduce((accumulator, current) => {
        return accumulator.concat([...Array(current.quantity).fill(current.type)]);
    }, []);

    return (
        <div className={styles.Burger}>
            <p className={styles.BurgerPrice}>$ { price }</p>
            <BurgerIngredient type="bread-top"/>
            { ingredientsArray.length === 0 
                ? <p className={styles.BurgerText}>Por favor agrega ingredientes</p>
                : ingredientsArray.map((ingredient, index) => <BurgerIngredient type={ingredient} key={ingredient + index}/>) 
            }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;