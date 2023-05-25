import React, { Suspense, useEffect } from "react";
const ComponentThatSuspends = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("./ComponentThatSuspends"));
    }, 5000);
  });
});
// https://react.dev/reference/react/Suspense#suspense

const Sibling = () => {
  useEffect(() => {
    console.log("是兄弟就来砍我");
  }, []);
  return <div>是兄弟就来砍我</div>;
};
const MySuspense = () => {
  return (
    <Suspense fallback={<div>loading。。。。</div>}>
      <ComponentThatSuspends />
      <Sibling />
    </Suspense>
  );
};

export default MySuspense;
