import React from "react";



export function plantMap(array) {

    console.log(array);
  let plantMap = array.map((el, i) => {
      return <a href ={`/plant/?id=${el.id}`} key = {i}> {el.common_name} </a>
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
