import React from 'react'
import './Title.css'

const Title = ({ children, level=1 }) => {
    if(level === 2) { return  (<h2 className="title">{children}</h2>) }
    if(level === 3) { return  (<h3 className="title">{children}</h3>) }
    if(level === 4) { return  (<h4 className="title">{children}</h4>) }
    if(level === 5) { return  (<h5 className="title">{children}</h5>) }
    if(level === 6) { return  (<h6 className="title">{children}</h6>) }
    return  (<h1 className="title">{children}</h1>)
}

export default Title