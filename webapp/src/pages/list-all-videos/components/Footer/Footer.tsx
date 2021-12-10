import React from "react";
import { FooterProps } from "./Footer.types";
import styles from './Footer.module.css';

const Footer: React.FC<FooterProps> = () => {
  return (
    <a
      href="https://tldv.io/"
      rel="noreferrer"
      className={styles.cta}
      target="_blank"
    >
      Catch up on meetings in minutes
    </a>
  );
};

export default Footer;
