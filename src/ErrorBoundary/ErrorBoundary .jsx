import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops! Something went wrong</h2>
          <a href="/">
            <p>Click here to go back</p>
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
