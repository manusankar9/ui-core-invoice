import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import {Provider} from './cart-items-context';
import DisplayTxt from './display-txt';


const CartItems = ()=>{
    const [cnt, setCnt] = useState(0);
    return (
        <Provider value={{cnt, setCnt}}>
            <DisplayTxt />
        </Provider>

    )
}

const App = () =>
    <div>
        <CartItems />
    </div>

render(<App />, document.getElementById('root'));
