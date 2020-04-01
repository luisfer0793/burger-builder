import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import ButtonPrimary from './../../components/UI/ButtonPrimary/ButtonPrimary';

import styles from './BurgerBuilder.module.css';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: [
            { type: 'salad', quantity: 0, price: .4 },
            { type: 'meat', quantity: 0, price: 1.4 },
            { type: 'cheese', quantity: 0, price: 1 },
            { type: 'bacon', quantity: 0, price: .7 },
        ],
        basePrice: 4,
        total: 4,
        isPurchasable: false
    };

    addIngredientHandler = type => {
        const newIngredients = this.state.ingredients.reduce((accumulator, ingredient) => accumulator.concat({...ingredient}), []);
        const typeIndex = newIngredients.findIndex(ingredient => ingredient.type === type);
        newIngredients[typeIndex].quantity = this.state.ingredients[typeIndex].quantity + 1;
        const ingredientsTotal = newIngredients.reduce((accumulator, ingredient) => accumulator + ingredient.quantity * ingredient.price, 0);
        const isPurchasable = newIngredients.some(ingredient => ingredient.quantity !== 0);
        this.setState((prevState) => ({
            ingredients: newIngredients,
            total: prevState.basePrice + ingredientsTotal,
            isPurchasable
        }));
    };

    removeIngredientHandler = type => {
        const newIngredients = this.state.ingredients.reduce((accumulator, ingredient) => accumulator.concat({...ingredient}), []);
        const typeIndex = newIngredients.findIndex(ingredient => ingredient.type === type);
        newIngredients[typeIndex].quantity = this.state.ingredients[typeIndex].quantity - 1;
        const ingredientsTotal = newIngredients.reduce((accumulator, ingredient) => accumulator + ingredient.quantity * ingredient.price, 0);
        const isPurchasable = newIngredients.some(ingredient => ingredient.quantity !== 0);
        this.setState((prevState) => ({
            ingredients: newIngredients,
            total: prevState.basePrice + ingredientsTotal,
            isPurchasable
        }));
    };

    render() {
        const disabledTypes = this.state.ingredients.reduce((accumulator, ingredient) => {
            accumulator[ingredient.type] = ingredient.quantity <= 0;
            return accumulator;
        }, {});
        
        return (
            <React.Fragment>
                <Modal>
                    <BurgerSummary ingredients={this.state.ingredients} total={this.state.total}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} price={this.state.total.toFixed(2)}/>
                <BuildControls
                    disabledTypes={disabledTypes} 
                    addIngredientHandler={this.addIngredientHandler} 
                    removeIngredientHandler={this.removeIngredientHandler}
                />
                <div className={styles.BurgerBuilderButtonContainer}>
                    <ButtonPrimary variant="contained" size="large" disabled={!this.state.isPurchasable}>Ordena Ahora</ButtonPrimary>
                </div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;