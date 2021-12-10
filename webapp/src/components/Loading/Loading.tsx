import React from "react";
import animation from "./animation.json";
import Lottie from "lottie-react-web";
import { LoadingProps } from "./Loading.types";

const Loading: React.FC<LoadingProps> = ({ label }) => {
  return (
    <>
      <Lottie
        data-testid="Loading::Animation"
        width={128}
        height={128}
        options={{
          animationData: animation,
        }}
      />
      {label && <span data-testid="Loading::Label">{label}</span>}
    </>
  );
};

export default Loading;
