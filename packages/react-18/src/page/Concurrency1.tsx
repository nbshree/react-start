import React, { useState, useEffect } from 'react';

const Concurrency1: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    useEffect(() => {
        setList(new Array(10000).fill(null));
    }, []);
    return (
        <>
            {list.map((_, i) => (
                <div key={i}>{i}</div>
            ))}
        </>
    );
};

export default Concurrency1;
