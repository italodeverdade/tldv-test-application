import React from "react";
import animation from "./animation.json";
import Lottie from "lottie-react-web";
import { LoadingProps } from "./Loading.types";

const Loading: React.FC<LoadingProps> = ({ label }) => {
  return (
    <>
      <Lottie
        width={128}
        height={128}
        options={{
          animationData: animation,
        }}
      />
      {label && <span>{label}</span>}
    </>
  );
};

export default Loading;
