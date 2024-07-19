import React from "react";

export const LoaderButton = ({ onClick, isLoading, title }) => {
  return (
    <div className="mt-3 btnCon aiCenter">
      <button
        type="submit"
        className="btn button-style "
        onClick={onClick}
        disabled={isLoading}
        style={{ backgroundColor: "var(--primary_color)" }}
      >
        {isLoading ? <div className="loader"></div> : title}
      </button>
    </div>
  );
};
