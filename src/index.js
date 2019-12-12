import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import { Provider } from './cart-items-context';
import { Provider as UserProfileProvider } from './user-profile-context';
import DisplayTxt from './display-txt';
import UserProfile from './user-profile';

const CartItems = () => {
    const [cnt, setCnt] = useState(0);
    return (
        <Provider value={{ cnt, setCnt }}>
            <UserProfileProvider value={{ name: 'Manasa' }}>
                <DisplayTxt />
            </UserProfileProvider>
        </Provider>

    )
}

const App = () =>
    <div>
        <CartItems />
    </div>

render(<App />, document.getElementById('root'));
