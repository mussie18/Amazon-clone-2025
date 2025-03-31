import React from "react";
import Header from "../Header/Header";

export const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayOut;
