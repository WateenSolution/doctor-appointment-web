import React from "react";
import { errorImage } from "../../utilities";

const Error = () => {
  return (
    <div className="error-page">
      <img
        className="errorImage"
        height={"50%"}
        width={"30%"}
        src={errorImage}
      />
      <h2>Internal Server Error</h2>
      <p>SOMETHING WENT WRONG!</p>
    </div>
  );
};

export default Error;
