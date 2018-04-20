import React, { Component } from 'react';
import "../../node_modules/picnic/picnic.min.css";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="nav"> 
            <img className="logo" src={require("../logo.png")} />
             <nav className="navbar">
            
              {/* responsive */}
              <input id="bmenub" type="checkbox" className="show" />
              <label for="bmenub" className="burger pseudo button">&#8801;</label>
            
              <div class="menu">
                <a href="#" className="new pseudo icon-picture">home</a>
                <select>
                    <option><a href="#" className="new pseudo icon-picture">services</a></option>
                    <option><a href="#" className="new pseudo icon-picture">Video Production</a></option>
                    <option><a href="#" className="new pseudo icon-picture">BIRTHDAYS</a></option>
                    <option><a href="#" className="new pseudo icon-picture">EVENTS</a></option>
                    <option><a href="#" className="new pseudo icon-picture">Live Shows</a></option>
                    <option><a href="#" className="new pseudo icon-picture">Summer Camp</a></option>
                </select>
                <select>
                    <option><a href="#" className="new pseudo icon-picture">Videos</a></option>
                    <option><a href="#" className="new pseudo icon-picture">DIY</a></option>
                    <option><a href="#" className="new pseudo icon-picture">ZUMBA</a></option>
                </select>
                <a href="#" className="new pseudo icon-picture">store</a>
                <a href="#" className="new pseudo icon-picture">about</a>
                <a href="#" className="new pseudo icon-picture">contact</a>
                <a href="#" className="new pseudo icon-picture">blog</a>

              </div>
            </nav>
            
            </div>
        )
    }
}
export default Navbar;