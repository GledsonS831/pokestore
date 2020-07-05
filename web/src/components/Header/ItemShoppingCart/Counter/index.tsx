import React, { useState } from 'react';
import * as St from './styles';


var ValueCount = 0;
const Counter: React.FC = () => {
    const [valueCount, setValueCount] = useState(0);
    ValueCount = valueCount;
    return (
        <St.CountSpan onClick={() => setValueCount(valueCount + 1)}>
            {valueCount}
        </St.CountSpan>
    )
}

export { ValueCount }

export default Counter;