import React, { useContext } from 'react';
import { Consumer } from './cart-items-context';
import { Consumer as GetProfile } from './user-profile-context';
import UserProfile from './user-profile';

export default () => {
    const { cnt, setCnt } = useContext(Consumer);
    const { name } = useContext(GetProfile);

    return (
        <div>
            <p>{cnt}</p>
            <UserProfile name={name} cnt={cnt} />
            <button onClick={() => setCnt(cnt + 1)}>DOo..</button>
        </div>
    )
}
