import React from "react";

// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import dataPlant from "../src/plants";

import "../scss/home.scss";

const { plantsList } = dataPlant;

export function Home(props) {
  console.log(plantsList);
  // let history = useHistory();

  // function PushStart() {
  //   history.push("");
  // }

  return (
    <div className="home">
      <div className="top"></div>
      <div className="highlights">
        <h1> Current Highlights</h1>
        <ul>
          <li>HELP</li>
        </ul>
      </div>
    </div>
  );
}

export default {
  Home,
};
