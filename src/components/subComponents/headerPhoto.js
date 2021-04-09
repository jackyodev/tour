import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function headerPhoto(urlString) {
  let urlArray = urlString.split(",");

  //[URL] => [{src: URL}] => <div></div>
  let arrayPhotos = urlArray.map((el, i) => {
    return (
      <div key={i}>
        <img src={el} />
      </div>
    );
  });

  return (
    <div className="plantPhoto">
      <Carousel showThumbs={false} emulateTouch={true}>
        {arrayPhotos}
      </Carousel>
    </div>
  );
}

export default { headerPhoto };

//https://www.npmjs.com/package/react-responsive-carousel
//https://www.npmjs.com/package/react-gallery-carousel