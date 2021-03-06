import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

const BurgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = (<div className={styles.BreadBottom}></div>);
            break;
        case 'bread-top':
            ingredient = (<div className={styles.BreadTop}></div>);
            break;
        case 'seeds1':
            ingredient = (<div className={styles.Seeds1}></div>);
            break;
        case 'seeds2':
            ingredient = (<div className={styles.Seeds2}></div>);
            break;
        case 'meat':
            ingredient = (<div className={styles.Meat}></div>);
            break;
        case 'cheese':
            ingredient = (<div className={styles.Cheese}></div>);
            break;
        case 'salad':
            ingredient = (<div className={styles.Salad}></div>);
            break;
        case 'bacon':
            ingredient = (<div className={styles.Bacon}></div>);
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;