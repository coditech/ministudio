import React from 'react'
import './DropDown.css'

export default class DropDown extends React.Component{
    state = {open:this.props.isOpen}
    toggle = () =>{  
        this.setState({open:!this.state.open})     
    }
    render(){
        const { title, children, isOpen } = this.props
        const open = this.state.open 
        var className = 'close';            
        if (open)
             className = 'open';
        console.log('classname: ' + className)             
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