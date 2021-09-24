import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { Loading } from "./subComponents/loading.js";
import { gardenHeaderMedia } from "./subComponents/headerMedia.js";

import "../scss/garden.scss";

function renderComp(props) {
  if (props !== null) {
    let { map_number, location_name, place_desc } = props.desc;

    return (
      <div className="garden">
        <h1 className="gardenTitle">
          {map_number}. {location_name}
        </h1>
        {gardenHeaderMedia(props.media)}
        <p className="pageDesc">{place_desc}</p>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export function Garden() {
  const location = useLocation();
  const useParams = new URLSearchParams(location.search);
  const id = useParams.get("id");
  const [gardenInfo, setGardenInfo] = useState(null);

  useEffect(() => {
    //https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33

    const fetchData = () => {
      //use gardens route to id each route
      axios
        .get(`/api/gardens/${id}`)
        .then((res) => {
          setGardenInfo(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    //the return callback is to cleanup the useEffect
    return () => clearTimeout(timer);
  }, [id]);

  return renderComp(gardenInfo);
}

const exported = { Garden };
export default exported;
