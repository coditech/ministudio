import React from 'react'

const Section = ({ children, color, src }) => {
    const style = ( src
    ? { backgroundImage:`url("${src}")`}
    : ( color
      ? { backgroundColor:color }
      : null
      )
    )
    return (
      <section className="main" style={style}>
        { children }
      </section>
    )
  }

export default Section