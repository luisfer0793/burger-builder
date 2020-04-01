import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import BurgerModal from '../../components/UI/BurgerModal/BurgerModal';
import Modal from '../../components/UI/Modal/Modal';

import Button from '@material-ui/core/Button';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: [
            { type: 'salad', quantity: 0, price: .8 },
            { type: 'meat', quantity: 0, price: 1.4 },
            { type: 'cheese', quantity: 0, price: 1 },
            { type: 'bacon', quantity: 0, price: .7 },
        ],
        basePrice: 4,
        total: 4
    };

    addIngredientHandler = type => {
        const newIngredients = this.state.ingredients.reduce((accumulator, ingredient) => accumulator.concat({...ingredient}), []);
        const typeIndex = newIngredients.findIndex(ingredient => ingredient.type === type);
        newIngredients[typeIndex].quantity = this.state.ingredients[typeIndex].quantity + 1;
        const ingredientsTotal = newIngredients.reduce((accumulator, ingredient) => accumulator + ingredient.quantity * ingredient.price, 0);
        this.setState((prevState) => ({
            ingredients: newIngredients,
            total: prevState.basePrice + ingredientsTotal
        }));
    };

    removeIngredientHandler = type => {
        const newIngredients = this.state.ingredients.reduce((accumulator, ingredient) => accumulator.concat({...ingredient}), []);
        const typeIndex = newIngredients.findIndex(ingredient => ingredient.type === type);
        newIngredients[typeIndex].quantity = this.state.ingredients[typeIndex].quantity - 1;
        const ingredientsTotal = newIngredients.reduce((accumulator, ingredient) => accumulator + ingredient.quantity * ingredient.price, 0);
        this.setState((prevState) => ({
            ingredients: newIngredients,
            total: prevState.basePrice + ingredientsTotal
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
                    <p>Aquí va la información del modal.</p>
                </Modal>
                <Burger ingredients={this.state.ingredients} price={this.state.total.toFixed(2)}/>
                <BuildControls
                    disabledTypes={disabledTypes} 
                    addIngredientHandler={this.addIngredientHandler} 
                    removeIngredientHandler={this.removeIngredientHandler}/>
                <Button variant="contained" color="primary" size="large">Order Now</Button>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;