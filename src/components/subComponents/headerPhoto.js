import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import YouTube from "react-youtube";

export function headerPhoto(urlString) {
  let urlArray = urlString.split(",");

  //[URL] => [{src: URL}] => <div></div>
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
        <div key={i}>
          <img alt="garden" src={el.media_url} />
        </div>
      );
    } else if (el.media === "youtube") {
      const opts = {
        height: "100%",
        width: "100%",
        controls: "1",
      };

      return (
        <div key={i} width="100%" height="100%">
          <YouTube videoId="tkuaVkoFrJI" opts={opts} />
        </div>
      );
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
const exported = { headerPhoto };
export default exported;

//https://www.npmjs.com/package/react-responsive-carousel
//https://www.npmjs.com/package/react-gallery-carousel
