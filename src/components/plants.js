import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Loading } from "../components/subComponents/loading.js";
import axios from "axios";

import { headerPhoto } from "../components/subComponents/headerPhoto";

function renderComp(props) {
  if (props != null) {
    let { photo_url, common_name, plant_species_name, plant_desc } = props;
    return (
      <>
        {headerPhoto(photo_url)}
        <div>{common_name}</div>
        <div>{plant_species_name}</div>
        <div>{plant_desc}</div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export function Plants() {
  const location = useLocation();
  const currentPath = location.pathname;
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
  }, []);

  return renderComp(plantInfo);
}

export default { Plants };
