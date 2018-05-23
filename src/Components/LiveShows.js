import React from 'react'
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import Section from './Section'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import './Activities.css'
import  MdFiberManualRecord  from 'react-icons/lib/md/fiber-manual-record'

const LiveShows = () => {
    return(
        <div className="main">
            <Navbar />
            <div className="container">
            <Section>
                <Grid>
                    <Row>
                        <Thumbnail>
                            <MdFiberManualRecord />
                            <h1>LiveShows</h1>                            
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

export default LiveShows;