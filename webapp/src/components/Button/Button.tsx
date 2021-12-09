import React from 'react';
import {ButtonProps} from './Button.types';

const Button : React.FC<ButtonProps> = ({label}) => {
    return (
        <button>
            {label && <span data-testid="Button::Label">{label}</span>}
        </button>
    )
}

export default Button;