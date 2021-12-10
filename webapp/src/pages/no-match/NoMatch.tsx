import React from 'react';
import styles from './NoMatch.module.css'
import animation from './animation.json'
import Lottie from 'lottie-react-web';

const NoMatch: React.FC = () => {
    return (
        <div className={styles.container}>
            <Lottie 
                width={400}
                height={400}
                options={{
                    animationData: animation
                }} />
            <h2>You're clean</h2>
            <span>Please, select some video in the list to watch or edit infos.</span>
        </div>
    )
};

export default NoMatch;