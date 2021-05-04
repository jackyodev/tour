import React, { useEffect, useState } from "react";
import Main from "../components/main";
import axios from "axios";
import { Loading } from "./subComponents/loading.js";

function renderComp(prop) {
  if (prop !== null) {
    return (
      <div className="plants">
        <h1 className="pageTitle">All Plants</h1>
        <nav> </nav>
        <ul className="highlights">{Main.mapHighlights(prop)}</ul>
      </div>
    );
  } else return <Loading />;
}

export function AllPlants() {
  const [allPlants, setAllPlants] = useState(null);

  useEffect(() => {
    //https://dev.to/reenydavidson/settimeout-in-useeffect-api-call-data-fetching-j33
    const fetchData = () => {
      axios
        .get(`/api/plants`)
        .then((res) => {
          setAllPlants(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1500);

    //the return callback is to cleanup the useEffect
    return () => clearTimeout(timer);
  }, []);
  return renderComp(allPlants);
}

const exported = { AllPlants };
export default exported;
