import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

import { headerPhoto } from "../components/subComponents/headerPhoto";

export function Plants(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const useParams = new URLSearchParams(location.search);
  const id = useParams.get("id");
  const [plantInfo, setPlantInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/plants/${id}`)
      .then((res) => {
        setPlantInfo(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return plantInfo == null ? (
    <h1> Loading </h1>
  ) : (
    <> {headerPhoto(plantInfo.photo_url)}</>
  );
}

export default { Plants };
