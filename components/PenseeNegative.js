import React from "react";
import Background from "./Background";
import Sentence from "./Sentence";

const PenseeNegative = ({ image, children, textColor, gradient }) => {
  return (
    <Background gradient={gradient} image={image}>
      <Sentence textColor={textColor}>{children}</Sentence>
    </Background>
  );
};

export default PenseeNegative;
