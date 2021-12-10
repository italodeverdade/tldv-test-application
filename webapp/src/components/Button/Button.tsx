import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";
import animation from "./animation.json";
import Lottie from "lottie-react-web";

const Button: React.FC<ButtonProps> = ({ label, loading, ...rest }) => {
  return (
    <button
      data-testid="Button::Button"
      {...rest}
      onClick={() => {
        if (rest.onClick && !loading) {
          rest.onClick();
        }
      }}
      className={styles.button}
    >
      {!loading && label && <span data-testid="Button::Label">{label}</span>}
      {loading && (
        <Lottie
          data-testid="Button::Animation"
          width={24}
          height={24}
          options={{
            animationData: animation,
          }}
        />
      )}
    </button>
  );
};

export default Button;
