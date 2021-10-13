import { useEffect } from "react";
import BgImg from "../img/sky.jpg";

function BgParams({ name, main }) {
  useEffect(() => {
    requestPictures();
  }, []); //eslint-disable-line

  async function requestPictures() {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?&query=${name}&client_id=lm7p1L2-fJuFVF_vCuw38sUcYGjkNDNNaiIgFCJGHs8`
    );

    const json = await res.json();

    if (res.ok && json.total > 0) {
      let {
        results: [
          {
            color,
            urls: { regular },
          },
        ],
      } = json;
      document.body.style.backgroundColor = color;

      if (main === "Rain" || main === "Thunderstorm") {
        document.body.style.backgroundImage = `linear-gradient(to bottom,   #4b5f6ddf, rgba(255, 255, 255, 0.1)),url(${regular})`;
      } else if (main === "Snow") {
        document.body.style.backgroundImage = `linear-gradient(to bottom,   #dae0e9fa, rgba(255, 255, 255, 0.1)),url(${regular})`;
      } else {
        document.body.style.backgroundImage = `url(${regular})`;
      }
    } else {
      document.body.style.backgroundImage = `url(${BgImg})`;
    }
  }
  return null;
}

export default BgParams;
