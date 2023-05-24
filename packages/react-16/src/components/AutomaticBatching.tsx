import React, {useRef} from 'react'
import {useEffect, useState} from 'react';

// React 18 之前
const AutomaticBatching = () => {
    console.log('render');
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const ref = useRef<HTMLButtonElement>(null)
    const element = ref.current && ref.current
    useEffect(() => {
        if(element){
            element.addEventListener('click', () => {
                setCount1(count => count + 1);
                setCount2(count => count + 1);
            });
        }
    }, [element]);

    return (
        <>
            {`count1 is ${count1}, count2 is ${count2}`}
            <button
                onClick={() => {
                    setCount1(count => count + 1);
                    setCount2(count => count + 1);
                }}
            >
                同时setState
            </button>

            <button
                onClick={() => {
                    setCount1(count => count + 1);
                    setTimeout(() => {
                        setCount2(count => count + 1);
                    }, 0)
                }}
            >
                setTimeout
            </button>
            <button ref={ref}
            >
                addEventListener
            </button>
        </>
    );
};

export default AutomaticBatching;
