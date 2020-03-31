import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const controls = [
    { type: 'cheese' },
    { type: 'salad' },
    { type: 'meat' },
    { type: 'bacon' },
];

const BuildControls = props => (
    <div className={styles.BuildControls}>
        {controls.map(control => (
            <BuildControl
                key={control.type}
                type={control.type}
                label={control.type}
                disabledTypes={props.disabledTypes}
                addIngredientHandler={props.addIngredientHandler}
                removeIngredientHandler={props.removeIngredientHandler}/>
        ))}
    </div>
);

export default BuildControls;