import React, { Component } from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap/lib/';


class Carriere extends Component {
    

    render() {


        return (
            <Grid id="carriere">
                <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
                    <Col >
                        <h2>CARRIÈRE PROFESSIONNELLE</h2>
                    </Col>
                </ Row>
                <Row className="show-grid">
                    <Col>
                        <Media.Left>
                            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Left>

                        <Media.Body>
                            <Media.Heading  >Biographie</Media.Heading>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                    </ Col>
                </ Row>
                <Row className="show-grid">
                <Col>

                        <Media.Body>
                            <Media.Heading  >Style Architectural</Media.Heading>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Right>
                    </ Col>
                </Row>
                <Row className="show-grid">
                <Col>
                        <Media.Left>
                            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Left>

                        <Media.Body>
                            <Media.Heading  >Projets de références</Media.Heading>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                    </ Col>
                </Row>
                <Row className="show-grid">
                <Col>
                        <Media.Body>
                            <Media.Heading  >Méthode de travail</Media.Heading>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Right>
                    </ Col>
                </Row>
            </Grid>
        )
    }
}

export default Carriere;
