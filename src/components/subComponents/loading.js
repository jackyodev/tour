import React from "react";
import loadingSpinner from "../../assets/369.gif";

export function Loading() {
  return (
    <>
      <div className="loading">
        <img src={loadingSpinner} width="100px" />
        <p> Loading </p>
      </div>
    </>
  );
}

const Load = { Loading };

export default Load;
