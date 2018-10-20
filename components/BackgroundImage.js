import React from "react";

const BackgroundImage = ({ children, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
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

export default BackgroundImage;
