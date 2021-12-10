import React from "react";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.css";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div data-testid="List::Header" className={styles.header}>
      <Link to="/" id="tldv" />
      <span className={styles.tag}>player</span>
    </div>
  );
};

export default Header;
