import React, { useContext } from 'react';
import {Consumer} from './cart-items-context';

export default () => {
    const {cnt, setCnt} = useContext(Consumer)

    return (
        <div>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>DOo..</button>

        </div>
    )
}
