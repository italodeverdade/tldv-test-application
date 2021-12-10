import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css'
import {ButtonLinkProps} from './ButtonLink.types';

const Button : React.FC<ButtonLinkProps> = ({label, component, ...rest}) => {
    return (
        <Link  {...rest} data-testid="ButtonLink::Link" className={styles.button}>
            {label && <span data-testid="ButtonLink::Label">{label}</span>}
        </Link>
    )
}

export default Button;