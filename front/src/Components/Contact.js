import React, { Component } from 'react';
import Navbar from './Navbar'
import ContactUs from './ContactUs';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ContactUs />
      </div>
    );
  }
}

export default Contact;
