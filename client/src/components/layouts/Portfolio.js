import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap/lib/';

class Porfolio extends Component {

    // config = [
    //     {
    //         subtitle: "photo1",
    //         image: "assets/640x480-manu.jpg",
    //         text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,tempus viverra turpis. Fusce condimentum nunc ac nisi vulputatefringilla. Donec lacinia congue felis in faucibus.",
    //     },
    //     {
    //         subtitle: "photo2",
    //         image: "assets/640x480-ariiura1.jpg",
    //         text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,tempus viverra turpis. Fusce condimentum nunc ac nisi vulputatefringilla. Donec lacinia congue felis in faucibus.",
    //     },
    //     {
    //         subtitle: "photo3",
    //         image: "assets/640x480-ariiura2.jpg",
    //         text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,tempus viverra turpis. Fusce condimentum nunc ac nisi vulputatefringilla. Donec lacinia congue felis in faucibus.",
    //     },
    //     {
    //         subtitle: "photo4",
    //         image: "assets/640x480-ariiura3.jpg",
    //         text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,tempus viverra turpis. Fusce condimentum nunc ac nisi vulputatefringilla. Donec lacinia congue felis in faucibus.",
    //     }
    // ]

    render() {

        const gridInstance = (
            <Grid id="portfolio">
                <Row style={{ paddingTop: 50, paddingBottom: 30 }} className="show-grid">
                    <Col>
                        <h2>PORTFOLIO</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-manu.jpg" href="assets/640x480-manu.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ariiura1.jpg" href="assets/640x480-ariiura1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ariiura2.jpg" href="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ariiura3.jpg" href="assets/640x480-ariiura3.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ecocar1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ecocar2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-cariot1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
                    </Col>
                    <Col xs={6} md={3} style={{ paddingTop: 20 }}>
                        <Thumbnail src="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
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
