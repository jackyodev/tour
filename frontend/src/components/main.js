import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

const getDayName = () => {
  let day = new Date().toLocaleString("en-us", { month: "long" });
  return day;
};

const urlsToArray = (url) => {
  let array = url.split(", ");
  return array[0];
};

const mapHighlights = (array) => {

  console.log(array);

  if(array != undefined) {
    return array.map((el, i) => {
      urlsToArray(el.photo_urls);
      return (
        <li key={i}>
          <Link to={`/plant/?id=${el.plant_id}`}>
            <div className="picture">
              <img
                id="picture"
                alt={el.plant_species_name}
                src={urlsToArray(el.photo_urls)}
              />
              <p>{el.common_name}</p>
            </div>
          </Link>
        </li>
      );
    });
  }

  else 
  return <h1> Hello World </h1>
 
};

export function Home() {
  const [plantHighlights, setPlantHighlights] = useState([]);

  const getHighlights = () => {
    axios
      .get(`/api/plants/months/${getDayName()}`)
      .then((res) => {
        console.log(res);
        setPlantHighlights(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getHighlights();
  }, []);

  return (
    <>
        <div className="top">
          <div className="header_img"></div>
        </div>
        <div className="body">
          <h1>In Bloom</h1>
          <ul className="highlights">{mapHighlights(plantHighlights)}</ul>
        </div>
    </>
  );
}

const Main = { Home, mapHighlights };

export default Main;
