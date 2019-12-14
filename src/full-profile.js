import React,{useContext} from 'react';
import UserDetailsContext from './user-details-context';

export default ()=>{
    const {setcnt,cnt} = useContext(UserDetailsContext.Consumer);

    return (<div>
        <b>full profile {cnt}</b>
        <button onClick = {()=>setcnt(cnt+1)}>increment</button>

    </div>)
}