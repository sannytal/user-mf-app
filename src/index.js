/* eslint-disable react/display-name */
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

window.renderBrowse = (containerId, containerObj) => {
  ReactDOM.render(<App containerData={containerObj} />, document.getElementById(containerId));
};

// const register = (containerObj) => {
//   return {
//     content: function () {
//       return (
//         <Router>
//           <App containerData={containerObj} />
//         </Router>
//       );
//     },
//   };
// };

// export default { register };
