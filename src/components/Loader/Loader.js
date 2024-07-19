import React from "react";
import { Grid, MutatingDots } from "react-loader-spinner";

export const Loader = ({ visible }) => {
  return (
    <div className={`loaderWrapper ${visible ? "visible" : ""}`}>
      <div className="overlay"></div>
      <div className="loadCon">
        <MutatingDots
          visible={visible}
          height={100}
          width={100}
          color="#020246"
          secondaryColor="#020246"
          radius={12.5}
          ariaLabel="mutating-dots-loading"
          wrapperClass="loadWrap"
        />
      </div>
    </div>
  );
};
