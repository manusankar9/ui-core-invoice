import React, { useContext } from 'react';
import UserContext from './user-context';

export default () => {
    const { cnt } = useContext(UserContext.Consumer);


    return (
        <div>
            {
                cnt > 3 ? <b>im tired</b> : <div>
                    <p>display text{cnt} </p>

                </div>
            }
        </div>
    )
}