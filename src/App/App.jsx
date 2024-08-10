import DataRequests from "../DataRequests/DataRequests";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary ";
import styles from "./App.module.css";
/**
 * The main component of the Simple Weather App.
 * Renders the application layout and handles error boundaries.
 *
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <div className={styles.App}>
      {/* Wraps the DataRequests component with an ErrorBoundary */}
      <ErrorBoundary>
        <DataRequests />
      </ErrorBoundary>
    </div>
  );
}

export default App;
