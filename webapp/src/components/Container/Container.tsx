import React from 'react';
import {ContainerProps} from './Container.types';
import styles from './Container.module.css'

const Container: React.FC<ContainerProps> = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Container;