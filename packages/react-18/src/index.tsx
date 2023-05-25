import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./route";
import { RouterProvider } from "react-router-dom";


//
// import AutomaticBatching from "./page/AutomaticBatching";
// import ReactDOM_old from "react-dom";
//
// ReactDOM_old.render(
//     <AutomaticBatching/>,
//     document.getElementById('root')
// )

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

