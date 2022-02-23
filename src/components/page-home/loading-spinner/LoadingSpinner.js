import React from "react";
import "./loading-spinner.scss"

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__border">
        <div className="spinner__center"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
