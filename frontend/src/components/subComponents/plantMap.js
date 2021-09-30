import React from "react";
import { Link } from "react-router-dom";


export function plantMap(array) {

    console.log(array);
  let plantMap = array.map((el, i) => {
      return <Link to={`/plant/?id=${el.id}`} key = {i}> {el.common_name} </Link>
  });

  console.log(plantMap);

  if (plantMap.length === 0) {
    return (
        <></>
    );
  } else
    return (
        plantMap
    );
}

const exported = { plantMap };
export default exported;
