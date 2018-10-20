import React from "react";

const Sentence = ({ children, color }) => {
  return (
    <h1
      style={{
        fontSize: "3em",
        lineHeight: "1.25",
        marginBottom: "0",
        marginTop: "0",
        color: color ? color : "black"
      }}
    >
      {children}
    </h1>
  );
};

export default Sentence;
