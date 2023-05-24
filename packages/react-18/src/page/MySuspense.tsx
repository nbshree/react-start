import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";
import useSWR from "swr";
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// https://react.dev/reference/react/Suspense#suspense
const MySuspense = () => {
    const {data} = useSWR(
        "https://mock.mengxuegu.com/mock/64623da81edc11628f7bcd3a/example/mock",
        fetcher,
        {suspense: true}
    );
    console.log("data", data)
    console.log("data?.data?.project", data?.data?.project)
    return (
        <div>
            {data?.data?.projects
                ?.map((item: any) => (
                <div>{item.email}</div>
            ))}
        </div>
    );
};

export default MySuspense;
