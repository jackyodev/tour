import React, { useEffect } from "react";
import video from "../src/welcome_video_bg.mp4";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../scss/welcomeScreen.scss";
import axios from "axios";

const getPlantInfoByID = (id) => {
  axios
    .get(`/api/plants/${id}`)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export function Plants(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const useParams = new URLSearchParams(location.search);
  const id = useParams.get("id");

  console.log(id);
  useEffect(() => {
    getPlantInfoByID(id);
  }, []);

  return null;
}

export default { Plants };
