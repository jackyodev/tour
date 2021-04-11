import React from "react";
import { NavLink } from "react-router-dom";
import { RiPlantFill, RiGradienterLine } from "react-icons/ri";

import { GiTwirlyFlower } from "react-icons/gi";

import "../scss/nav.scss";

export function Nav(props) {
  return (
    <div>
      <NavLink to="/tours">
        <RiGradienterLine />
        <span> Tours </span>
      </NavLink>
      <NavLink to="/gardens">
        <GiTwirlyFlower /> <span> Gardens</span>
      </NavLink>
      <NavLink to="/plants">
        <RiPlantFill /> <span> Plants</span>
      </NavLink>
    </div>
  );
}

export function navItem(props) {
  return;
}
const exported = { Nav };
export default exported;
