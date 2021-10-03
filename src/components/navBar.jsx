import React, {useState, useEffect} from 'react';
import { ProfileDropdown } from './tools/Dropdowns'

const ProfilImg = require("../resources/images/dan.jpg").default

function NavBar({authorInfo}){

    const [radioButonValue, setRadioButonValue] = useState(false);

    const handleChangeRadio = () => {
        setRadioButonValue(!radioButonValue);
    };


    useEffect(() => {
        const navItems = document.querySelectorAll(".nav-items")

        const listener = () => {}

        navItems.forEach(function(item){
            item.addEventListener("click", function() {
                navItems.forEach(li => {
                    li.classList.remove("active")
                })
                
                this.classList.add("active")
            })
        })

    })

    
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
                    <img src={ProfilImg} alt="zemfack" className="avatar" width="100px" />
                    <ProfileDropdown />
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