import React, { useContext } from 'react';
import CartItemsCtx from './cart-items-context';

export default () => {
    const {cnt, setCnt} = useContext(CartItemsCtx)

    return (
        <div>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>DOo..</button>

        </div>
    )
}
