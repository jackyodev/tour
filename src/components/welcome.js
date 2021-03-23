import React from "react";
import { useHistory } from "react-router-dom";

export function welcomeScreen() {
  function PushStart() {
    // let history = useHistory();
    // history.push("/home");
    console.log("ERROR");
  }
  return (
    <div className="bg">
      <h1> Queens Botanical Garden</h1>
      <h2> Tour and Guide App</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus
        lorem, tempus ac arcu vitae, euismod varius est. Donec rutrum lacus
      </p>

      <button onClick={PushStart}> START </button>
    </div>
  );
}

export default { welcomeScreen };
