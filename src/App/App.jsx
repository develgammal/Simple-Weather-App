import DataRequests from "../DataRequests/DataRequests";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary ";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <ErrorBoundary>
        <DataRequests />
      </ErrorBoundary>
    </div>
  );
}

export default App;
