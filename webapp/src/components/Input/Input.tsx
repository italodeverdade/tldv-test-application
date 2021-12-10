import React from "react";
import { InputProps } from "./Input.types";
import styles from './Input.module.css';

const Input: React.FC<InputProps> = ({label, ...rest}) => {
    return (
        <div data-testid="Input::Container" className={styles.container}>
            {label && <span data-testid="Input::Label">{label}</span>}
            <input data-testid="Input::Input" {...rest} />
        </div>
    )
}

Input.defaultProps = {
    type: "text"
}

export default Input;