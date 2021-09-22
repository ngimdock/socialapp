import React, {useState} from 'react';
import Avatar from './avatar';

function NavBar({authorInfo}){

    const [radioButonValue, setRadioButonValue] = useState(false);

    const handleChangeRadio = () => {
        setRadioButonValue(!radioButonValue);
   };


    
    return (
        <header className="navBar">
            <div className="logo">
                Socialapp
            </div>
            <nav className="navigation">
                <ul id="hey" style={{left: radioButonValue? '0' : '100%'}}>
                    <li className="nav-items active">ACTUALITÉ</li>
                    <li className="nav-items">MESSAGES</li>
                    <li className="nav-items">PARAMETRES</li>
                </ul>
                <div className="author-block">
                    <Avatar person={authorInfo} className="avatar-author"/>
                    <i className="bi bi-caret-down-fill"></i>
                </div>
                
                <input type="checkbox" id="check"  defaultChecked={radioButonValue} />
                <label htmlFor="check" className="checkBtn">
                    <i className={radioButonValue? "bi bi-x-circle" : "bi bi-justify"}   onClick={handleChangeRadio}></i>
                </label>
            </nav>
        </header>
    );
}


export default NavBar;