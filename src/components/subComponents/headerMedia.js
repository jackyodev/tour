import React from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//https://www.npmjs.com/package/react-responsive-carousel
//https://www.npmjs.com/package/react-gallery-carousel

export function plantHeaderMedia(urlString) {
  let urlArray = urlString.split(",");

  let arrayPhotos = urlArray.map((el, i) => {
    return (
      <div key={i}>
        <img alt="plant" src={el} />
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

export function gardenHeaderMedia(array) {
  let arrayMedia = array.map((el, i) => {
    if (el.media === "picture") {
      return (
        <div className="gardenImage" key={i}>
          <img alt={el.media_alt} src={el.media_url} />
        </div>
      );
    } else if (el.media === "youtube") {
      return (
        <div className="gardenVideo" key={i}>
          <ReactPlayer controls url={el.media_url} />
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="garden">
      <Carousel showThumbs={false} emulateTouch={true}>
        {arrayMedia}
      </Carousel>
    </div>
  );
}

const exported = { plantHeaderMedia, gardenHeaderMedia };
export default exported;
