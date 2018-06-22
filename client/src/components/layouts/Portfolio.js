import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';

class Porfolio extends Component {
    render() {
        const gridInstance = (
            <Grid id="portfolio">
                <Row style={{ paddingTop: 50, paddingBottom: 30 }} className="show-grid">
                    <Col>
                        <h2>PORTFOLIO</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-manu.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ariiura1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ariiura3.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ecocar1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ecocar2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-cariot1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3}>
                        <img src="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
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
