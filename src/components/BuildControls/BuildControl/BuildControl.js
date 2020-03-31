import React from 'react';

import styles from './BuildControl.module.css';

const BuildControl = props => (
    <div className={styles.BuildControl}>
        <button 
            className={styles.BuildControlButton} 
            onClick={() => props.removeIngredientHandler(props.type)}
            disabled={props.disabledTypes[props.type]}
        >-</button>
        <p className={styles.BuildControlLabel}>{props.label}</p>
        <button 
            className={styles.BuildControlButton} 
            onClick={() => props.addIngredientHandler(props.type)}
        >+</button>
    </div>
);

export default BuildControl;