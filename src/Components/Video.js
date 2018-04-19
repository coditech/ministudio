import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chat from "./Chat";
import './App.css'

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }
    
    Relaod = () =>{
      window.location="https://www.youtube.com/channel/UCOwyzWourCke41irmVcEtCQ/videos"
    }
    render () {
        return (
          <div>
            <video className="background-video" loop autoPlay muted >
                <source src={this.state.videoURL} type="video/mp4" />
               </video>
                  <div className = "divbtn" onClick = {this.Relaod}>Watch More</div>
                     <div>
                         </div>
                              </div>
                              )
                            }
                          }; 
export default Video;

