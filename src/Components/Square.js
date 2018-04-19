import React from 'react'

const Square = ({src,title, url}) => {
    const style = ( src
    ? { backgroundImage: `url(${src})` } 
    : null
    )
    return(
      <div className="square" style={style}>
        <div className="square-content">
        { title 
        ? <p>{title}</p>
        : null 
        }
        { url 
        ? <p><a href={ url }>Read More</a></p>
        : null
        }
        </div>
      </div>
    )
  }
export default Square