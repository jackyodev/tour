import React, {useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// import { Loading } from "./subComponents/loading.js";
import "../scss/garden.scss";
// import { NavLink } from "react-router-dom";
// import { render } from "@testing-library/react";
import { historyRender } from "../components/toursSections/historyRender.js"
import { sustainabilityRender } from "../components/toursSections/sustainabilityRender.js"
import { buildingRender } from "../components/toursSections/buildingRender.js"
import { biotopeRender } from "../components/toursSections/biotopeRender.js"
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
  const [section, setSection] = useState("");

  const mapNav = () => {
    let map = tourSection.map((el, i) => {
      return (
        <>
          <Tab
            onClick={() => {
              setSection(`${el.url}`);
            }}
          >
            {el.section}
          </Tab>
        </>
      );
    });
    return map;
  };

  return (
    <>
    <div className ="top"> 
    <div className="header_img"></div>
    </div>
    <section className = "tabs_panels"> 
    <Tabs>
        <TabList>{mapNav()}</TabList>
        <TabPanel>{renderSection(section)}</TabPanel>
        <TabPanel>{renderSection(section)}</TabPanel>
        <TabPanel>{renderSection(section)}</TabPanel>
        <TabPanel>{renderSection(section)}</TabPanel>
      </Tabs>
    </section>

    </>
  );
}

const exported = { Tour };
export default exported;
