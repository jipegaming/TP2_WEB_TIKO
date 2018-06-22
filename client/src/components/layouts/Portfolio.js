import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';

class Porfolio extends Component {
    render() {
        const gridInstance = (
            <Grid id="portfolio">
                <Row className="show-grid">
                    <Col>
                        <h2>PORTFOLIO</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" thumbnail />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" thumbnail />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" circle />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" thumbnail />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/Archi_0.jpg" thumbnail />
                    </Col>
                </Row>
            </Grid>
        )
        return (
            gridInstance
        )
    }
}

export default Porfolio;
