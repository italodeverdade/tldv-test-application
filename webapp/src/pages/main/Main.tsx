import React from "react";
import { Outlet } from "react-router-dom";
import styles from './Main.module.css';
import ListAllVideos from "../list-all-videos";
import Container from "@webapp/components/Container";

const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <ListAllVideos />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default Main;