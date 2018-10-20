import React from "react";
import BackgroundImage from "./BackgroundImage";
import Sentence from "./Sentence";

const PenseeNegative = ({ url, children, color }) => {
  return (
    <BackgroundImage image="images/flowers.jpg">
      <Sentence>{children}</Sentence>
    </BackgroundImage>
  );
};

export default PenseeNegative;
