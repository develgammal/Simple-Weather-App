import * as React from "react";
import { useState } from "react";
import DisplayParams from "../DisplayParams/DisplayParams";
import styles from "./DataRequests.module.css";
import welcomeImg from "../img/welcome.png";
import { FaSearch } from "react-icons/fa";

function DataRequests() {
  // State variables to store the weather conditions, loading status, error status, error message, and city name
  const [conditions, setConditions] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cityName, setcityName] = useState("");

  // Function to handle the "Enter" key press event
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      requestConditions();
    }
  };

  // Function to make an API request to fetch weather conditions for the specified city
  async function requestConditions() {
    setLoading(true);
    setError(false);

    // Make a GET request to the OpenWeatherMap API to fetch weather conditions for the specified city
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5714cd7a9f65439b0a0a7734b599f159`
    );

    // Parse the response as JSON
    const json = await res.json();

    // If the response is successful (status code 200), update the conditions state variable with the fetched data
    // Otherwise, set the error state variable and store the error message
    if (res.ok) {
      setConditions(json);
    } else {
      setErrorMsg(json.message);
      setError(true);
    }

    setLoading(false);
  }

  // If the loading state is true, display a loading message
  if (loading) {
    return <p className={styles.loading}>Loading... hold on a sec</p>;
  }

  return (
    <React.Fragment>
      {/* If the conditions state variable is undefined, display the welcome screen */}
      {conditions === undefined ? (
        <div className={styles.welcomeScreen}>
          <img className={styles.welcomeImg} src={welcomeImg} alt="welcome" />
          <h1>
            Simple <span>W</span>eather <span>&reg;</span>
          </h1>
        </div>
      ) : (
        // Otherwise, render the DisplayParams component and pass the conditions as a prop
        <DisplayParams conditions={conditions} />
      )}
      <footer className={styles.searchWrapper}>
        {/* If there is an error, display the error message */}
        {error && <p className={styles.errorMsg}>{errorMsg}</p>}
        <div className={styles.searchContainer}>
          {/* Input field to enter the city name */}
          <input
            autoFocus
            spellCheck="false"
            type="text"
            placeholder="city.. "
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setcityName(e.target.value)}
            className={styles.searchInput}
          />
          {/* Button to send the request */}
          <button className={styles.searchButton} onClick={requestConditions}>
            <FaSearch />
          </button>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default DataRequests;
