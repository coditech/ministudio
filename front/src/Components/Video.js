import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Video.css'

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://video.wixstatic.com/video/e04112_0fc47f3f1bd04f289435361bff3e55b8/1080p/mp4/file.mp4',
        }
    }
    
    render () {
        return(
            // <MediaQuery minDeviceWidth={700}>
            // {(matches) => {
            //     if (matches){
            //     return(
                <div className="videocontainer">
                    <video  className="video" loop autoPlay muted >
                        <source  src={this.state.videoURL} type="video/mp4" />
                    </video>
                    <div className = "videobtn" >Watch more </div>
                </div>
                // )
            //     }
            //     else{
            //     return(
            //     <div className="videocontainer">
            //         <div  className="video" >
            //             <img  src="./images/zumba7.jpg" type="video/mp4" />
            //         </div>
            //         <div className = "videobtn" >Watch more </div>
            //     </div>    
            //     )    
            //     }
            // }}
            
            // </MediaQuery>
            // )    
        )}
                          }; 
export default Video;

