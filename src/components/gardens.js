import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./subComponents/loading.js";

import "../scss/gardens.scss";



function renderComp(array) {
  if (array !== null) {
    const mapArray = array.map((el, i) => {
      return (
        <li id={i} key={i}>
          <div className="mapNumber">
            <p> {el.map_number}</p>
          </div>
          <Link to={`/garden/?id=${el.map_number}`}>
            <div className="garden picture">
              <img id="picture" alt={el.location_name} src={el.thumbnail_url} />
            </div>
            <p> {el.location_name}</p>
          </Link>
        </li>
      );
    });

    return (
      <div className="gardens">
        <h1 className="pageTitle"> All Gardens </h1>
        <ul className="highlights"> {mapArray}</ul>
      </div>
    );
  } else return <Loading />;
}

export function Gardens() {
  const [allGardens, setAllGardens] = useState(null);


   const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    console.log(scrolled)
  }


  useEffect(() => {


    //https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33
    const fetchData = () => {
      axios
        .get(`/api/gardens`)
        .then((res) => {
          setAllGardens(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    //the return callback is to cleanup the useEffect
    return () =>
      window.removeEventListener('scroll', listenToScroll)
      clearTimeout(timer)
  }, []);

  return renderComp(allGardens);
}

const exported = { Gardens };

export default exported;
