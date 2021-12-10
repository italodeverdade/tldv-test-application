import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css'
import {ButtonLinkProps} from './ButtonLink.types';

const Button : React.FC<ButtonLinkProps> = ({label, component, ...rest}) => {
    return (
        <Link  {...rest} className={styles.button}>
            {label && <span data-testid="Button::Label">{label}</span>}
        </Link>
    )
}

export default Button;