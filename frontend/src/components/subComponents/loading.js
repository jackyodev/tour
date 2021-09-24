import React from "react";
import loadingSpinner from "../../assets/369.gif";

export function Loading() {
  return (
    <>
      <div className="loading">
        <img alt="loading spinner" src={loadingSpinner} width="50px" />
        <p> Loading.. </p>
      </div>
    </>
  );
}

const Load = { Loading };

export default Load;
