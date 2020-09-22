import React from "react";
import App from "./App";

export default { title: "UserPage" };
const clickEvent = () => {
  console.log("clicked from user page");
};

const containerObj = {
  pageName: "User",
  getConsoleLog: clickEvent,
};

export const defaultRender = () => <App containerData={containerObj} />;
