import React, { useState } from "react";

import "react-tabs/style/react-tabs.css";

import { Tabs, Tab } from "@tarragon/swipeable-tabs";

import "../scss/garden.scss";
import { historyRender } from "../components/toursSections/historyRender.js";
import { sustainabilityRender } from "../components/toursSections/sustainabilityRender.js";
import { buildingRender } from "../components/toursSections/buildingRender.js";
import { biotopeRender } from "../components/toursSections/biotopeRender.js";
import "../scss/tour.scss";

const tourSection = [
  {
    section: "History",
    img: "https://queensbotanical.org/wp-content/uploads/2019/01/Roses.jpg",
    url: "history",
  },
  {
    section: "Sustainability",
    img:
      "https://queensbotanical.org/wp-content/uploads/2019/02/2018.6.6_CREDIT-Jess-Brey018.png",
    url: "sustainability",
  },
  {
    section: "Building",
    img:
      "https://queensbotanical.org/wp-content/uploads/2019/01/Rendering-of-new-Parking-Garden-in-construction.-Sven-Johnson-Illustration.png",
    url: "building",
  },
  {
    section: "Biotope",
    img:
      "https://queensbotanical.org/wp-content/uploads/2019/02/with-labels-1024x541.png",
    url: "biotope",
  },
];

const renderSection = (state) => {
  switch (state) {
    case "building":
      return buildingRender(state);

    case "biotope":
      return biotopeRender(state);

    case "sustainability":
      return sustainabilityRender(state);

    default:
      return historyRender(state);
  }
};

export function Tour() {
  const [selectedTab, setSelectedTab] = useState("History");

  const map = () => {
    let map = tourSection.map((el, i) => {
      return (
        <Tab label={el.section} key={i}>
          {renderSection(el.url)}
        </Tab>
      );
    });

    return map;
  };

  return (
    <>
      <div className="top">
        <div className="header_img"></div>
      </div>

      <Tabs
        value={selectedTab}
        onChange={(label) => {
          setSelectedTab(label.label);
        }}
        tabBarCSS={`font-size: .75em;
      font-weight: light; margin: 0 0 1px 0;`}
        styleProps={{
          alignHeader: "center",
          barColor: "transparent",
          selectedHeaderTextColor: "#c92965",
          headerTextColor: "#16912b",
          activeInkBarColor: "#c92965",
          inkBarColor: "hsla(0,0%,100%,.45)",
          tabPosition: "top",
          justifyTabs: "space-evenly",
        }}
      >
        {map()}
      </Tabs>
    </>
  );
}

const exported = { Tour };
export default exported;
