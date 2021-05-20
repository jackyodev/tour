import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome4Fill, RiPlantFill, RiCompass3Fill } from "react-icons/ri";

// import { TiTree } from "react-icons/ti";
import { GiTwirlyFlower } from "react-icons/gi";

import "../scss/nav.scss";

export function Nav(props) {
  return (
    <div>
      <NavLink to="/home">
        <RiHome4Fill />
        <span>Home</span>
      </NavLink>
      <NavLink to="/tours">
        <RiCompass3Fill />
        <span>Tours</span>
      </NavLink>
      <NavLink to="/gardens">
        <GiTwirlyFlower /> <span>Gardens</span>
      </NavLink>
      <NavLink to="/plants">
        <RiPlantFill /> <span>Plants</span>
      </NavLink>
      {/* <NavLink to="/trees">
        <TiTree /> <span>Trees</span>
      </NavLink> */}
    </div>
  );
}

export function navItem(props) {
  return;
}
const exported = { Nav };
export default exported;
