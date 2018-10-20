import React from "react";

const Background = ({ children, image, gradient }) => {
  return (
    <div
      style={{
        backgroundImage: gradient ? gradient : `url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      {children}
    </div>
  );
};

export default Background;
