import React from 'react'
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import Section from './Section'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import './Activities.css'
import  MdCake  from 'react-icons/lib/md/cake'

const Entertainment = () => {
    return(
        <div className="main">
            <Navbar />
            <div className="container">
            <Section>
                <Grid>
                    <Row>
                        <Thumbnail>
                            <MdCake />
                            <h1>Entertainment</h1>                            
                            <p>Comming Soon...</p>
                        </Thumbnail>
                    </Row>
                </Grid>;
            </Section>
            </div>
            <ContactUs />
        </div>
    )
}

export default Entertainment;