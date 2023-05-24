/* eslint-disable @typescript-eslint/naming-convention,@typescript-eslint/no-explicit-any */
import React, { useEffect, useLayoutEffect, useState } from "react";

interface MyUseLayoutEffectProps {}
const MyUseLayoutEffect = (props: MyUseLayoutEffectProps) => {
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  console.log("render", value);
  return (
    <div onClick={() => setValue(0)}>value: {value}</div>
  );
};

export default MyUseLayoutEffect;
