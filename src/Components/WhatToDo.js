import React, { Component } from 'react';
import 'picnic/picnic.min.css';
import './App.css'
import Square from './Square'
import Section from './Section'
import Title from './Title'


class WhatToDo extends Component{
    render(){
        return(
            <div>
            <Section src="images/waves.jpg">
                <Title> Latest Videos </Title>
              <div className="wrapper">
                <div className="flex three center five-600">
                  <div><Square title="Production"  url="#"/></div>
                  <div><Square src='images/pic1.jpg'/></div>
                  <div><Square title="Entertainment"  url="#"/></div>
                  <div><Square src='images/pic2.jpg'/></div>
                  <div><Square title="Live Shows" url="#"/></div>
                </div>
              </div>
            </Section>
          </div>
        )
    }
}
export default WhatToDo