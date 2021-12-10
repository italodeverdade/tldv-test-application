import React from 'react';
import styles from './Button.module.css'
import {ButtonProps} from './Button.types';

const Button : React.FC<ButtonProps> = ({label, ...rest}) => {
    return (
        <button {...rest} className={styles.button}>
            {label && <span data-testid="Button::Label">{label}</span>}
        </button>
    )
}

export default Button;