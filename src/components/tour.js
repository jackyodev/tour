import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Loading } from "./subComponents/loading.js";
import "../scss/garden.scss";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

const historyRender = (state) => {
  return (
    <>
      <h1>MISSION & HISTORY</h1>.
      <p>{state.image}</p>
      <figure>
      <img src="https://queensbotanical.org/wp-content/uploads/2015/11/gop-gates-200-dpi-205x300.jpg" />
        <figcaption>
          <i>
          Gates to "Gardens on parade"
          </i>
        </figcaption>
      </figure>
      <p>
        Queens Botanical Garden (QBG) is an urban oasis where people, plants,
        and cultures are celebrated through inspiring gardens, innovative
        educational programs, and real-world applications of environmental
        stewardship.
      </p>
      <p>
        QBG is located on property owned by the City of New York, and its
        operation is made possible in part by public funds provided through the
        New York City Department of Cultural Affairs, Queens Borough President,
        the New York City Council, State elected officials, the New York State
        Department of Parks, Recreation and Historic Preservation, along with
        corporate, foundation, and individual supporters.
      </p>
      <figure>
        <img src="https://queensbotanical.org/wp-content/uploads/2017/06/jandp-postcard-600x369.jpg" />
        <figcaption>
          <i>
            Poster cover for 1939 World’s Fair “Gardens on Parade” horticulture
            exhibition
          </i>
        </figcaption>
      </figure>

      <h2> HISTORY </h2>
      <p>
        Located at the northeast corner of Flushing Meadows-Corona Park in
        Flushing, QBG evolved from the five-acre “Gardens on Parade” exhibit
        showcased at the 1939-1940 New York World’s Fair. Officially opening as
        “The Queens Botanical Garden Society” in 1946 after local residents
        saved and expanded the original exhibit, the Garden remained at the
        original World’s Fair site until 1961, when it was moved to its current
        location on Main Street in Flushing. Among the original plantings taken
        from the 1939 site are two blue atlas cedars that frame the iconic tree
        gate sculpture at the Garden’s Main Street entrance today. QBG has
        become a 39-acre oasis in one of New York City’s most bustling and
        diverse neighborhoods.
      </p>

      <figure>
      <img src="https://queensbotanical.org/wp-content/uploads/2015/11/1939-cover-212x300.jpg" />
        <figcaption>
          <i>
          English cottage garden from the “Gardens on parade” exhibit of the 1939 World’s Fair
          </i>
        </figcaption>
      </figure>

    </>
  );
};

const tourSection = [
  {
    section: "History",
    img: "https://queensbotanical.org/wp-content/uploads/2019/01/Roses.jpg",
    url: "history",
  }
//   ,
//   {
//     section: "Sustainability",
//     img:
//       "https://queensbotanical.org/wp-content/uploads/2019/02/2018.6.6_CREDIT-Jess-Brey018.png",
//     url: "sustainability",
//   },
//   {
//     section: "Parking",
//     img:
//       "https://queensbotanical.org/wp-content/uploads/2019/01/Rendering-of-new-Parking-Garden-in-construction.-Sven-Johnson-Illustration.png",
//     url: "parking",
//   },
//   {
//     section: "Biotope",
//     img:
//       "https://queensbotanical.org/wp-content/uploads/2019/02/with-labels-1024x541.png",
//     url: "biotope",
//   },
];

const renderSection = (state) => {
  switch (state) {
    case "parking":
      return <h1> Parking </h1>;

    case "biotope":
      return <h1> Biotope </h1>;

    case "sustainability":
      return <h1> Sustainability </h1>;
    
     default:
     return historyRender(state)

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

      )
    });
    return map;
  };

  return (
    <Tabs>
      <TabList>{mapNav()}</TabList>
      <TabPanel>{renderSection(section)}</TabPanel>
      <TabPanel>{renderSection(section)}</TabPanel>
      <TabPanel>{renderSection(section)}</TabPanel>
      <TabPanel>{renderSection(section)}</TabPanel>

    </Tabs>
  );
}

const exported = { Tour };
export default exported;
