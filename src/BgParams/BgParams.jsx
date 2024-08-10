import { useEffect } from "react";
import BgImg from "../img/sky.jpg";

function BgParams({ name, main }) {
  // This useEffect hook is used to make the API request for pictures when the component mounts.
  useEffect(() => {
    requestPictures();
  }, []); //eslint-disable-line

  // This function makes an asynchronous API request to fetch pictures based on the provided name.
  async function requestPictures() {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?&query=${name}&client_id=lm7p1L2-fJuFVF_vCuw38sUcYGjkNDNNaiIgFCJGHs8`
    );

    const json = await res.json();

    // If the API request is successful and there are pictures available for the given name,
    // the background color and image are set accordingly.
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

      // If the weather condition is "Rain" or "Thunderstorm", a linear gradient background
      // with a semi-transparent overlay and the fetched image is applied.
      if (main === "Rain" || main === "Thunderstorm") {
        document.body.style.backgroundImage = `linear-gradient(to bottom,   #4b5f6ddf, rgba(255, 255, 255, 0.1)),url(${regular})`;
      }
      // If the weather condition is "Snow", a linear gradient background with a semi-transparent
      // overlay and the fetched image is applied.
      else if (main === "Snow") {
        document.body.style.backgroundImage = `linear-gradient(to bottom,   #dae0e9fa, rgba(255, 255, 255, 0.1)),url(${regular})`;
      }
      // For any other weather condition, only the fetched image is applied as the background.
      else {
        document.body.style.backgroundImage = `url(${regular})`;
      }
    }
    // If the API request fails or there are no pictures available, a default background image is applied.
    else {
      document.body.style.backgroundImage = `url(${BgImg})`;
    }
  }
  // The component doesn't render any JSX, so it returns null.
  return null;
}

export default BgParams;
