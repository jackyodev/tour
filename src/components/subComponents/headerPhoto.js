import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function headerPhoto(urlString) {
  let arrayPhoto = [
    {
      src: urlString,
    },
  ];

  return (
    <div className="plantPhoto">
      <Carousel showThumbs={false} emulateTouch={true} width={"50vw"}>
        <div>
          <img src={urlString} />
        </div>
      </Carousel>
    </div>
  );
}

export default { headerPhoto };

//https://www.npmjs.com/package/react-responsive-carousel
//https://www.npmjs.com/package/react-gallery-carousel
