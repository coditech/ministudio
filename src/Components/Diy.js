import React, { Component } from 'react';
import './Diy.css';
import Section from './Section';
import ContactUs from './ContactUs'
class DIY extends Component{
    constructor(props){
        super(props)
            const src = "https://www.youtube.com/embed/YCitUcyES4s"
        this.state = {
            videoURL:src
        }
        this.changeVideo = this.changeVideo.bind(this);
    }
    changeVideo(source) {
        this.setState({videoURL: source})
    }
    render(){
        return(

                <section className='Diy-section' >
                <div class="Diy-container">
                <iframe  className="Diy-show-video" src={this.state.videoURL} >
                
               </iframe>  
<div class="wrapper">
  <div class="box a" onClick = {() => this.changeVideo("https://www.youtube.com/embed/YCitUcyES4s")}>
  <img  width="247" height="139" alt="zumba" src={require("../images/diy1.jpg")} />

  </div>
  <div class="box b" onClick = {() => this.changeVideo("https://www.youtube.com/embed/I-2_75rkz_Q")}>
  <img  width="247" height="139" alt="zumba" src={require("../images/diy2.jpg")} />
  </div>
  <div class="box c" onClick = {() => this.changeVideo("https://www.youtube.com/embed/Qt9d_wRRwD8")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/diy3.jpg")} />
  </div>
  <div class="box e" onClick = {() => this.changeVideo("https://www.youtube.com/embed/cOdM8SUoOSQ")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/diy4.jpg")} />
  </div>
  <div class="box f" onClick = {() => this.changeVideo("https://www.youtube.com/embed/Z3ahb2fzp7A")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/diy5.jpg")} />
  </div>
  <div class="box g" onClick = {() => this.changeVideo("https://www.youtube.com/embed/mAdsglMRm9U")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/diy6.jpg")} />
  </div>
</div>
</div>
<div class = "DiyContactUs">
<ContactUs/>
</div>
</section>

            
        )
    }
}
export default DIY