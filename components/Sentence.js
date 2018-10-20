import React from "react";

const Sentence = ({ children, textColor }) => {
  return (
    <h1
      style={{
        fontSize: "3em",
        lineHeight: "1.25",
        marginBottom: "0",
        marginTop: "0",
        color: textColor ? textColor : "black"
      }}
    >
      {children}
    </h1>
  );
};

export default Sentence;
