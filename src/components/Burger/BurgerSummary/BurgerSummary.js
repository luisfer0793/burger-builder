import React from 'react';

import styles from './BurgerSummary.module.css';
import ButtonPrimary from '../../UI/ButtonPrimary/ButtonPrimary';

const BurgerSummary = ({ingredients, total, orderHandler, modalHandler}) => {
    return (
        <div className={styles.BurgerSummary}>
            <h2 className={styles.BurgerSummaryTitle}>Tu Pedido</h2>
            <p className={styles.BurgerSummaryText}>Los ingredientes de tu hamburguesa son los siguientes</p>
            <ul className={styles.BurgerSummaryList}>
                {ingredients.map(ingredient => (
                    <li className={styles.BurgerSummaryListItem} key={ingredient.type}>
                        <span className={styles.BurgerSummaryListItemType}>{ingredient.quantity} - {ingredient.type}</span>
                        <span>{(ingredient.quantity * ingredient.price).toFixed(2)} $</span>
                    </li>
                ))}
                <li className={styles.BurgerSummaryListItem}>
                    <span className={styles.BurgerSummaryListItemType}>Total</span>
                    <span>{total.toFixed(2)} $</span>
                </li>
            </ul>
            <div className={styles.BurgerSummaryButtons}>
                <ButtonPrimary variant="contained" size="large" onClick={orderHandler}>Ordenar</ButtonPrimary>
                <ButtonPrimary variant="contained" size="large" onClick={modalHandler} type='Danger'>Cancelar</ButtonPrimary>
            </div>
        </div>
    );
};

export default BurgerSummary;