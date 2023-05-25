import React, {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Suspense,
} from "react";
import useSWR from "swr";
const fetcher = async (...args: any[]) =>{
    // @ts-ignore
    const response = await fetch(...args);
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })
    return response.json();
}


// https://react.dev/reference/react/Suspense#suspense
const ComponentThatSuspends = () => {
  const { data } = useSWR(
    "https://mock.mengxuegu.com/mock/64623da81edc11628f7bcd3a/example/mock",
    fetcher,
    { suspense: true }
  );
  console.log("data", data);
  console.log("data?.data?.project", data?.data?.project);
  return (
    <div>
      {data?.data?.projects?.map((item: any) => (
        <div>{item.email}</div>
      ))}
    </div>
  );
};

const MySuspenseSwr = () => {
  return (
    <Suspense fallback={<div>loading。。。。</div>}>
      <ComponentThatSuspends />
    </Suspense>
  );
};

export default MySuspenseSwr;
