import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import Welcome from './welcome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import UserContext from './user-context';
import initFontAwesome from "./utils/initFontAwesome";
import DisplayTxt from './display-txt.js';
import UserDetailsContext from './user-details-context';
import FullProfile from './full-profile';
initFontAwesome();

const Information = () => {
    const [cnt, setcnt] = useState(0);

    return (
        <div>
            <UserDetailsContext.Provider value={{ name: "manasa", setcnt, cnt }}>


                <UserContext.Provider value={{ cnt }}>
                    <DisplayTxt />
                    <FullProfile />
                </UserContext.Provider>

            </UserDetailsContext.Provider>
        </div>
    )
}

const List = () => {
    let ls = [{ name: 'siva' ,id:1}, { name: 'manasa' ,id:2}];
    return (
        <select onChange={(evt)=>{
            console.log("hi",evt.target.value)
        }}>
            {

                ls.map(({ name, id }) => <option value={id}>::{name}</option>)
            }
        </select>
    )
}

const NamesList = () => {
    let ls = [{ name: 'siva' ,id:1}, { name: 'manasa' ,id:2}];
    return (
        <select onChange={(evt)=>{
            console.log("hi",evt.target.value)
        }}>
            {

                ls.map(({ name, id }) => <option value={id}>::{name}</option>)
            }
        </select>
    )
}

class App extends React.Component {

    render() {

        return (<div>
            <FontAwesomeIcon icon={faHome} className="mr-3" />

            Welcome hello world {React.version}
            <p>Good well done Ms</p>
            <p>thanks</p>
            <Add asternum1={25} num2={56} />
            <Welcome />
            <List />
            <Information />

            <p>helloooooooo</p>

        </div >
        )
    }
}


render(<App />, document.getElementById('root'));
