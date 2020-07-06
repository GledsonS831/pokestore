import React, { useState } from 'react';
import * as St from './styles';
var ValueCount = 0;
const Counter = () => {

    const [count, setCount] = useState<number>(0);
    ValueCount = count;
    return (
        <St.CountSpan onClick={() => setCount(count + 1)}>
            {count}
        </St.CountSpan>
    )
}

export {ValueCount}

export default Counter;