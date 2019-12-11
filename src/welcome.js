import React from 'react'
import CartItemsCtx from './cart-items-context'


const Welcome = () =>
    <CartItemsCtx.Consumer>
        {
            ({cnt, setCnt})=>
                    <div>
                        <p>Hello manasa {cnt}</p>
                        <button onClick={()=>setCnt(cnt+1)}>Inc</button>
                    </div>
        }

    </CartItemsCtx.Consumer>

export default Welcome;