import * as React from 'react';
import Preview from '../../components/preview';

export default () => (
  <Preview
    type="github"
    project="remix-run/react-router/tree/main/examples/lazy-loading"
    options={{
      openFile: 'src/App.tsx',
      hideExplorer: true,
    }}
  />
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom-v6";

// // import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
