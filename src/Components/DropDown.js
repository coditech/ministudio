import React from 'react'
import './DropDown.css'

export default class DropDown extends React.Component{
    state = {open:false}
    toggle = () => this.setState({open:!this.state.open})
    render(){
        const { title, children } = this.props
        const { open } = this.state
        const className = open ? 'open' : 'closed'
        return (
            <div className={'dropdown dropdown-'+className}>
                <div className="dropdown-header" onClick={this.toggle}>
                    <a>{title}</a>
                </div>
                <div className="dropdown-content">
                    {children}
                </div>
            </div>
        )
    }
}