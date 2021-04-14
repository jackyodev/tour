import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./subComponents/loading.js";
import axios from "axios";
import { gardenHeaderMedia } from "../components/subComponents/headerPhoto";

function renderComp(props) {
  if (props !== null) {
    let { map_number, location_name, place_desc } = props.desc;
    let mediaArray = props.media;
    return (
      <>
        <div className="garden">
          <div>{gardenHeaderMedia(mediaArray)}</div>
          <div className="gardenName">
            <i className="">
              {map_number}. {location_name}
            </i>
          </div>
          <p className="">{place_desc}</p>
        </div>
      </>
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
