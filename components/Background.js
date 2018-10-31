import React from "react";

const Background = ({ children, image = null, gradient = null }) => {
  let backgroundImage = "white";
  if (image) {
    backgroundImage = `url(${image})`;
  }
  if (gradient) {
    backgroundImage = gradient;
  }
  return (
    <div
      style={{
        backgroundImage,
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
