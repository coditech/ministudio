import React, { Component } from "react";
import Section from "./Section";
import Title from "./Title";
import "./ContactUs.css";
// import "../fontello/css/anas-icons-embedded.css";
import Map from "./Map.js";
import axios from "axios";
import qs from "qs";

const ContactUsTitle = ({ text }) => (
  <Title level={2} className="contact-us-title">
    <span>{text}</span>
  </Title>
);

const ContactUsPart = props => <div className="contact-us-part" {...props} />;

const ContactUsContent = props => (
  <div className="contact-us-content flex one two-600" {...props} />
);

class ContactUs extends Component {
  constructor(context) {
    super(context);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      response: "",
      isSubmitted:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const myData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    console.log(myData);
    if (myData.name && myData.email && myData.subject && myData.message) {
      console.log(qs.stringify(myData));
      const form = await axios
        .post("http://localhost:3001/api/form", qs.stringify(myData))
        .then(response => {
          console.log("response: " + response);
        })
        .catch(error => {
          alert("Error Occured! Please try again later");
          console.log(error.response);
        })
        .then(
          this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            isSubmitted:true
          })
        )
    } else {
      <div class="contact-alert error">
        <span onClick={() => {this.setState({isSubmitted:false})}}class="closebtn">&times;</span>  
        <strong>Error!</strong> Couldn't send the form
      </div>
    }
  }

  render() {
    return (
      <div>
        <Section
          className="contact-us flex one two-800"
          color="rgba(204, 16, 19, 1)"
        >
          <ContactUsPart>
            <ContactUsTitle text="FIND US" />
            <ContactUsContent>
              <div className="map full" style={{ height: 261 }}>
                {" "}
                <Map />{" "}
              </div>
              <div className="small">
                <p>Qobayat Street, Beirut</p>
                <p>Email: info@ministudioclub.tv</p>
                <p>Tel: +961 3 85 86 87</p>
              </div>
              <div className="small">
                <p>Opening Hours:</p>
                <p>Mon - Fri: 9am - 5pm </p>
                <p>​​Saturday: 10am - 3pm ​</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="social-media full">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon icon-facebook"
                  href="//facebook.com/ministudio"
                >
                  <img
                    className="facbook-icon"
                    src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e0678ef25486466ba65ef6ad47b559e1.png"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon icon-youtube"
                  href="//facebook.com/ministudio"
                >
                  <img
                    className="youtube-icon"
                    src="https://static.wixstatic.com/media/e9bb463a1bc4434c9d33b81b1fe937f5.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e9bb463a1bc4434c9d33b81b1fe937f5.png"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon icon-instagram"
                  href="//facebook.com/ministudio"
                >
                  <img
                    className="instagram-icon"
                    src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/da7ef6dd1302486c9a67baebe4b364bc.png"
                  />
                </a>
              </div>
            </ContactUsContent>
          </ContactUsPart>
          <ContactUsPart>
            <ContactUsTitle text="CONTACT" />
            <ContactUsContent>
            
              {this.state.isSubmitted ? 
                <div class="contact-alert">
                  <span onClick={() => {this.setState({isSubmitted:false})}}class="closebtn">&times;</span>  <strong>Success!</strong> Contact Form Submitted
                </div> : null 
              }
              <form
                onSubmit={this.handleSubmit}
                className="flex full"
                className="flex full"
                style={{
                  marginRight: "auto",
                  width: "16em",
                  marginLeft: "auto"
                }}
              >
                <div className="input half-600">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="Name"
                  />
                </div>
                <div className="input half-600">
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    placeholder="Email"
                  />
                </div>
                <div className="input full">
                  <input
                    type="text"
                    name="subject"
                    onChange={this.handleChange}
                    value={this.state.subject}
                    placeholder="Subject"
                  />
                </div>
                <div className="input full">
                  <textarea
                    rows={10}
                    name="message"
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Message"
                  />
                </div>
                <div className="input full">
                  <button
                    class="full half-500 third-800"
                    style={{ width: "14.8em" }}
                  >
                    send
                  </button>
                </div>
                <div className="input full">
                  <p
                    class="full half-500 third-800"
                    style={{ width: "14.8em" }}
                  >
                    {this.state.response}
                  </p>
                </div>
              </form>
            </ContactUsContent>
          </ContactUsPart>
        </Section>
        <div className="footer">
          <p class="font_8">© 2018 - All rights reserved</p>
          <div className="">
            <a href="//facebook.com/ministudio">
              <img
                className="facbook-icon"
                src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/4057345bcf57474b96976284050c00df.png"
              />
            </a>
            <a href="//facebook.com/ministudio">
              <img
                className="youtube-icon"
                src="https://static.wixstatic.com/media/45bce1d726f64f1999c49feae57f6298.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/45bce1d726f64f1999c49feae57f6298.png"
              />
            </a>
            <a href="//facebook.com/ministudio">
              <img
                className="instagram-icon"
                src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e1aa082f7c0747168d9cf43e77046142.png"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  // async handleSubmit(e){
  //   e.preventDefault()
  //   const myData = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     message: this.state.message
  //   }
  //   console.log(myData)
  //   console.log(qs.stringify(myData))
  //   const form =await axios.post('http://localhost:3001/api/form',qs.stringify(myData))
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //       console.log(error.response)
  //   })
  //   .then(
  //     this.setState({
  //       name: '',
  //       email: '',
  //       message: ''
  //     })
  //   )
  // }
  render() {
    return <ContactUs handleSubmit={this.handleSubmit} />;
  }
}

export default ContactUs;
