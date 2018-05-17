import React from 'react';
import Section from './Section'
import Title from './Title'
import './ContactUs.css'
import '../fontello/css/anas-icons-embedded.css'
import Map from './Map.js' 

const ContactUsTitle = ({text}) => (
    <Title level={2} className="contact-us-title">
        <span>{text}</span>
    </Title>
)

const ContactUsPart = (props) => (<div className="contact-us-part" {...props}/>)

const ContactUsContent = (props) => <div className="contact-us-content flex one two-600" {...props}/>

const ContactUs = () => (
    <Section className="contact-us flex one two-800" color="rgba(204, 16, 19, 1)">
        <ContactUsPart>
            <ContactUsTitle text="FIND US"/>
            <ContactUsContent>
                <div className="map full" style={{height:300}}> <Map/> </div>
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
                    <a target="_blank" rel="noopener noreferrer" className="social-icon icon-facebook" href="//facebook.com/ministudio"><span>facebook</span></a>
                    <a target="_blank" rel="noopener noreferrer" className="social-icon icon-youtube" href="//facebook.com/ministudio"><span>youtube</span></a>
                    <a target="_blank" rel="noopener noreferrer" className="social-icon icon-instagram" href="//facebook.com/ministudio"><span>instagram</span></a>
                </div>
            </ContactUsContent>
        </ContactUsPart>
        <ContactUsPart>
            <ContactUsTitle text="CONTACT"/>
            <ContactUsContent>
                <form className="flex full" style={{paddingLeft:60 , width:'20em' , marginLeft:'7em'}}>
                    <div className="input half-600"><input type="text" name="name" placeholder="Name"/></div>
                    <div className="input half-600"><input type="text" name="email" placeholder="Email"/></div>
                    <div className="input full"><input type="text" name="subject" placeholder="Subject"/></div>
                    <div className="input full"><textarea rows={10} name="message" placeholder="Message"/></div>
                    <div className="input full"><button class="full half-500 third-800" style={{width:'16em'}}>send</button></div>
                </form>
            </ContactUsContent>
        </ContactUsPart>
    </Section>
)

export default ContactUs