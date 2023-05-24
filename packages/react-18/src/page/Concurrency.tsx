import React, {
  useState,
  useEffect,
  useDeferredValue,
  useRef,
} from "react";


const ShowValue = (props: any) => {
  console.log("props.list", props.list);
  return (
    <div>
      {props.list.map((_: any, i: number) => (
        <div key={i}>
          {i}
        </div>
      ))}
    </div>
  );
};

const ShowValueMemo = React.memo(ShowValue);
const Concurrency: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [showValue, setShowValue] = useState<number>(0);
  const ref = useRef<any>(null);
  useEffect(() => {
    setList(new Array(20000).fill(null));
    setTimeout(() => {
      ref.current.click();
    }, 200);
  }, []);

  const listDeferredValue = useDeferredValue(list);

  return (
    <div style={{ display: "flex" }}>
      <div
        ref={ref}
        style={{ cursor: "pointer" }}
        onClick={() => {
          console.log("1", 1);
          setShowValue(2222);
        }}
      >
        点我{showValue}
      </div>
      <div>
        {/*{list.map((_: any, i: number) => (*/}
        {/*  <div key={i}>{i}</div>*/}
        {/*))}*/}
      </div>
      <ShowValueMemo list={listDeferredValue} />
    </div>
  );
};

export default Concurrency;
