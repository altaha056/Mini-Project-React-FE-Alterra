import React from "react";
import { ReactComponent as Grid } from "./grid.svg";
import "./loading.css";
const LoadingAnimation = () => {
  return (
    <div className="container-loading">
      <h1>Loading</h1>
      <Grid />
    </div>
  );
};

export default LoadingAnimation;
