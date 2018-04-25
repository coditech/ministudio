import React, { Component } from 'react';
import './PhotoGallery.css';
import Masonry from 'masonry-layout'

const gridSize = 20

const Background = ({loaded, src, width, height}) => {
    const backgroundImage = loaded ? `url("${src}")` : 'linear-gradient(yellow,red,blue)'
    width = width || gridSize * 10
    height = height || gridSize * 10
    return <div className="photo" style={{width,height,backgroundImage}}/>
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

class PhotoGallery extends Component {
    state = {
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
            columnWidth: gridSize
        });
        this.msnry = msnry
        
        this.state.images.forEach((image,index) => {
            loadImage(image.src,({width,height})=>{
                const clampedHeight = clamp(height / 3, 0, gridSize*60)
                const clampedWidth = clamp(width / 3, 0, gridSize*60)
                const newImage = { ...image, loaded:true, width, height, clampedWidth, clampedHeight }
                const images = this.state.images.slice()
                images[index] = newImage
                this.setState((state)=>({...state,images}))
            })
        })
    }
    render() {
        return (
            <div ref={(element)=>this.rootElement = element} className="PhotoSection"> 
                { this.state.images.map( image => {
                    return <Background key={image.src} loaded={image.loaded} width={image.clampedWidth} height={image.clampedHeight} src={image.src} alt="firewood" />
                })}   
            </div>

        );
    }
}

export default PhotoGallery