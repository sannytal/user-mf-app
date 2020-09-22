/* eslint-disable react/display-name */
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const register = (containerObj) => {
  return {
    content: function () {
      return (
        <Router>
          <App containerData={containerObj} />
        </Router>
      );
    },
  };
};

export default { register };
