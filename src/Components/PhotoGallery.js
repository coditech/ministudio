import React, { Component } from 'react';
import './PhotoGallery.css';
import Masonry from 'masonry-layout';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const gridSize = 20

const Background = ({onClick, loaded, src, width, height}) => {
    const backgroundImage = loaded ? `url("${src}")` : 'linear-gradient(yellow,red,blue)'
    width = width || gridSize * 10
    height = height || gridSize * 10
    return <div onClick={onClick} className="photo" style={{width,height,backgroundImage}}/>
}

const loadImage = (src, whenDone) => {
    const imageLoader = document.createElement('img')
    imageLoader.onload = () => {
        const height = imageLoader.height
        const width = imageLoader.width
        setTimeout(()=>whenDone({width,height}), 1000)
    }
    imageLoader.src = src
}

const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};

const snap = (num, step) => Math.round(num / step) * step

class PhotoGallery extends Component {
    state = {
        index:0,
        images:[
            { loaded:false, src:'images/firewood.png'},
            { loaded:false, src:'images/ferriswheel.png'},
            { loaded:false, src:'images/palmtrees.png'},
            { loaded:false, src:'images/mistyslopes.png'},
            { loaded:false, src:'images/beachhuts.png'},
            { loaded:false, src:'images/citycycle.png'},
            { loaded:false, src:'images/mountainlake.png'},
        ]
    }
    componentDidUpdate(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout( ()=> {
            this.msnry.layout()
        },300)
    }
    componentDidMount(){
        const grid = this.rootElement
        const msnry = new Masonry( grid, {
            itemSelector: '.photo',
            columnWidth: gridSize,
            isFitWidth:true
        });
        this.msnry = msnry
        const number = this.state.images.length
        const factor = ( number > 10
        ? 4
        : ( number < 5
          ? 1
          : 4
          )
        )
        this.state.images.forEach((image,index) => {
            loadImage(image.src,({width,height})=>{
                const clampedHeight = snap(height / factor, gridSize)
                const clampedWidth = snap(width / factor, gridSize)
                const newImage = { ...image, loaded:true, width, height, clampedWidth, clampedHeight }
                const images = this.state.images.slice()
                images[index] = newImage
                this.setState((state)=>({...state,images}))
            })
        })
    }
    onKeyDown = (evt) => {
        console.log(evt.keyCode)
        if(evt.keyCode === 27 ){
            this.setState({show:false})
        }
    }
    render() {
        return (
            <div>
                <div tabIndex={0} onKeyDown={this.onKeyDown} style={{zIndex:99999, position:'fixed', top:0, left:0, right:0, bottom:0, background:'red', display:(this.state.show ? 'block' : 'none')}}>
                  <ImageGallery items={this.state.images} />                          
                    <div style={{background:'blue', width:50,height:50}} onClick={()=>this.setState({show:false})} />
                </div>
                <div className="PhotoSection">
                    <div ref={(element)=>this.rootElement = element} className="Photos"> 
                        { this.state.images.map( (image, index ) => {
                            return <Background onClick={()=>this.setState({index,show:true})} key={image.src} loaded={image.loaded} width={image.clampedWidth} height={image.clampedHeight} src={image.src} alt="firewood" />
                        })}   
                    </div>
                </div>
                <div style={{width:'100%',clear:'both'}}></div>
            </div>
        );
    }
}

export default PhotoGallery