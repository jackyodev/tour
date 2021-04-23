import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./subComponents/loading.js";
import axios from "axios";

import { plantHeaderMedia } from "./subComponents/headerMedia.js";
import "../scss/plant.scss";

function renderComp(props) {
  if (props !== null) {
    let { photo_url, common_name, plant_species_name, plant_desc } = props;
    return (
      <div className="plant">
        {plantHeaderMedia(photo_url)}
        <div className="plantName">
          <div className="">{common_name}</div>
          <i className="">{plant_species_name}</i>
        </div>
        <p className="pageDesc">{plant_desc}</p>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export function Plant() {
  const location = useLocation();
  const useParams = new URLSearchParams(location.search);
  const id = useParams.get("id");
  const [plantInfo, setPlantInfo] = useState(null);

  useEffect(() => {
    //https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33
    const fetchData = () => {
      axios
        .get(`/api/plants/${id}`)
        .then((res) => {
          setPlantInfo(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    //the return callback is to cleanup the useEffect
    return () => clearTimeout(timer);
  }, [id]);

  return renderComp(plantInfo);
}

const exported = { Plant };
export default exported;
