import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import Welcome from './welcome';
import CartItemsCtx from './cart-items-context';
import DisplayTxt from './display-txt';


const CartItems = ()=>{
    const [cnt, setCnt] = useState(0);
    return (
        <CartItemsCtx.Provider value={{cnt, setCnt}}>
            <Welcome />
            <DisplayTxt />
        </CartItemsCtx.Provider>

    )
}

const App = () =>
    <div>
        Welcome hello world {React.version}
        <p>Good well done Ms</p>
        <p>thanks</p>
        <Add asternum1 = {25} num2 = {56}/>
        <CartItems />

    </div>

render(<App />, document.getElementById('root'));
