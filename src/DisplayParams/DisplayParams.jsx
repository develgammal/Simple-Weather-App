import * as React from "react";
import BgParams from "../BgParams/BgParams";
import dateFormat from "dateformat";
import styles from "./DisplayParams.module.css";

// Importing image sources
import humidIcon from "../img/humid.jpg";
import windIcon from "../img/wind.png";
import cloudsIcon from "../img/clouds.png";
import minIcon from "../img/min.png";
import maxIcon from "../img/max.png";

function DisplayParams({ conditions }) {
  // Destructuring the 'conditions' object
  let {
    name,
    timezone,
    sys: { country },
    main: { temp, temp_max, temp_min, humidity },
    weather: [{ main, description, icon }],
    wind: { speed },
    clouds: { all },
  } = conditions;

  // Constructing the icon source URL
  const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  // Calculating local time
  const timeOffset = new Date().getTimezoneOffset();
  const localTime = Date.now() + 60000 * timeOffset + 1000 * timezone;

  return (
    <React.Fragment>
      <BgParams name={name} description={description} main={main} />
      <header>
        <h1>
          {name}, <span>{country}</span>
        </h1>
        <p>Local Time</p>
        <p className={styles.clock}>
          {dateFormat(new Date(localTime), "h:MM TT")}
        </p>
        <p>{dateFormat(new Date(localTime), "dddd, mmmm dS")}</p>
      </header>
      <div className={styles.description}>
        <img
          className={styles.iconImg}
          src={icon ? iconSrc : ""}
          alt={description}
        ></img>
        <p>{description}</p>
      </div>
      <main>
        <h1 className={styles.mainTemp}>{Math.round(temp)}&#176;</h1>
        <div>
          <div className={styles.sideConditions}>
            <h3>
              <span>{Math.round(humidity)}</span> %
            </h3>
            <img src={humidIcon} alt="humidity" width="50px" />
          </div>

          <div className={styles.sideConditions}>
            <h3>
              <span>{Math.round(speed)}</span> m/s
            </h3>
            <img src={windIcon} alt="wind" width="50px" />
          </div>

          <div className={styles.sideConditions}>
            <h3>
              <span>{Math.round(all)}</span> %
            </h3>
            <img src={cloudsIcon} alt="clouds" width="50px" />
          </div>
        </div>
      </main>
      <aside>
        <div className={styles.minTemp}>
          <img src={minIcon} alt="minimum temperature" width="40px" />
          <h2>
            <span>{Math.round(temp_min * 10) / 10}&#176;</span> C &#8595;
          </h2>
        </div>
        <div>
          <img src={maxIcon} alt="maximum temperature" width="40px" />
          <h2>
            <span>{Math.round(temp_max * 10) / 10}&#176;</span> C &#8593;
          </h2>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default DisplayParams;
