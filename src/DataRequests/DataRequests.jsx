import * as React from "react";
import { useState } from "react";
import DisplayParams from "../DisplayParams/DisplayParams";
import styles from "./DataRequests.module.css";
import welcomeImg from "../img/welcome.png";

function DataRequests() {
  const [conditions, setConditions] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cityName, setcityName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      requestConditions();
    }
  };

  async function requestConditions() {
    setLoading(true);
    setError(false);

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5714cd7a9f65439b0a0a7734b599f159`
    );

    const json = await res.json();

    if (res.ok) {
      setConditions(json);
    } else {
      setErrorMsg(json.message);
      setError(true);
    }

    setLoading(false);
  }
  if (loading) {
    return <p className={styles.loading}>Loading... hold on a sec</p>;
  }

  return (
    <React.Fragment>
      {conditions === undefined ? (
        <div className={styles.welcomeScreen}>
          <img className={styles.welcomeImg} src={welcomeImg} alt="welcome" />
          <h1>
            Simple <span>W</span>eather <span>&reg;</span>
          </h1>
        </div>
      ) : (
        <DisplayParams conditions={conditions} />
      )}
      <footer>
        {error && <p className={styles.errorMsg}>{errorMsg}</p>}
        <input
          autoFocus
          spellcheck="false"
          type="text"
          placeholder="city.. "
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setcityName(e.target.value)}
        />
      </footer>
    </React.Fragment>
  );
}

export default DataRequests;
