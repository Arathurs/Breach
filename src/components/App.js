import React from "react";

import LoginForm from "./LoginForm";

export default class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <LoginForm />
      </div>
    );
  }
}
