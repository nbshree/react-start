import React, { useState, useEffect, useDeferredValue } from 'react';

const Concurrency2: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    useEffect(() => {
        setList(new Array(10000).fill(null));
    }, []);
    // 使用了并发特性，开启并发更新
    const deferredList = useDeferredValue(list);
    return (
        <>
            {deferredList.map((_, i) => (
                <div key={i}>{i}</div>
            ))}
        </>
    );
};

export default Concurrency2;

