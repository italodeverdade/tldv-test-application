import React from "react";
import { InputProps } from "./Input.types";
import styles from './Input.module.css';

const Input: React.FC<InputProps> = ({label, ...rest}) => {
    return (
        <div className={styles.container}>
            {label && <span>{label}</span>}
            <input {...rest} />
        </div>
    )
}

Input.defaultProps = {
    type: "text"
}

export default Input;