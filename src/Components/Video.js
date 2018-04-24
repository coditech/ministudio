import React, { Component } from 'react';
// import Chat from "./Chat";
import './Video.css'

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://video.wixstatic.com/video/e04112_0fc47f3f1bd04f289435361bff3e55b8/1080p/mp4/file.mp4'
        }
    }
    
    // Relaod = () =>{
    //   window.location="https://www.youtube.com/channel/UCOwyzWourCke41irmVcEtCQ/videos"
    // }
    render () {
        return (
          <div className="video-size">
            <video  loop autoPlay muted >
                <source  src={this.state.videoURL} type="video/mp4" />
               </video>
                     <div className = "videobtn" >Watch More </div>

                              </div>
                              )
                            }
                          }; 
export default Video;

