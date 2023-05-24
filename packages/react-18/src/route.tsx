import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import UseTransition from "./page/UseTransition";
import UseTransition2 from "./page/UseTransition2";
import AutomaticBatching from "./page/AutomaticBatching";
import MySuspense from "./page/MySuspense";
import MyUseDeferredValue from "./page/MyUseDeferredValue";
import MyUseLayoutEffect from "./page/MyUseLayoutEffect";
import Concurrency1 from "./page/Concurrency1";
import Concurrency2 from "./page/Concurrency2";

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
        element: (
          <Suspense fallback={<div>loading。。。。</div>}>
            <MySuspense />
          </Suspense>
        ),
      },
      {
        path: "/MyUseLayoutEffect",
        element: <MyUseLayoutEffect />,
      },
      {
        path: "/Concurrency1",
        element: <Concurrency1 />,
      },
      {
        path: "/Concurrency2",
        element: <Concurrency2 />,
      },
    ],
  },
]);

export default router;
