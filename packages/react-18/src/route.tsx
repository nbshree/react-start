import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import UseTransition from "./page/UseTransition";
import UseTransition2 from "./page/UseTransition2";
import AutomaticBatching from "./page/AutomaticBatching";
import MySuspense from "./page/MySuspense";
import MyUseDeferredValue from "./page/MyUseDeferredValue";
import MyUseLayoutEffect from "./page/MyUseLayoutEffect";
import Concurrency from "./page/Concurrency";
import MySuspenseSwr from "./page/MySuspenseSwr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/useTransition1",
        element: <UseTransition />,
      },
      {
        path: "/useTransition2",
        element: <UseTransition2 />,
      },
      {
        path: "/MyUseDeferredValue",
        element: <MyUseDeferredValue />,
      },
      {
        path: "/AutomaticBatching",
        element: <AutomaticBatching />,
      },
      {
        path: "/MySuspense",
        element: <MySuspense />,
      },
      {
        path: "/MySuspenseSwr",
        element: <MySuspenseSwr />,
      },
      {
        path: "/MyUseLayoutEffect",
        element: <MyUseLayoutEffect />,
      },
      {
        path: "/Concurrency",
        element: <Concurrency />,
      },
    ],
  },
]);

export default router;
