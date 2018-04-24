import React from 'react';
import "../../node_modules/picnic/picnic.min.css";
import "./Navbar.css";
import DropDown from './DropDown'

const Navbar = () => (
    <div className="nav"> 
        <img className="logo" alt="Ministudio logo" src={require("../logo.png")} />
        <nav className="navbar">
        
        {/* responsive */}
        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">&#8801;</label>

        <div className="menu">
            <span href="#" className="new pseudo icon-picture">home</span>
            <DropDown title="services">
                <a className="pseudo icon-picture">Video Production</a>
                <a className="pseudo icon-picture">BIRTHDAYS</a>
                <a className="pseudo icon-picture">EVENTS</a>
                <a className="pseudo icon-picture">Live Shows</a>
                <a className="pseudo icon-picture">Summer Camp</a>
            </DropDown>
           
            <DropDown title="videos">
                <a className="pseudo icon-picture">DIY</a>
                <a className="pseudo icon-picture">ZUMBA</a>
            </DropDown>
            <a href="#" className="new pseudo icon-picture">store</a>
            <a href="#" className="new pseudo icon-picture">about</a>
            <a href="#" className="new pseudo icon-picture">contact</a>
            <a href="#" className="new pseudo icon-picture">blog</a>

        </div>
    </nav>
    
    </div>
)

export default Navbar;