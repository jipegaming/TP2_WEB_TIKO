import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';

class Contact extends Component {
    render() {
        const gridInstance = (
            <Grid id="contact">
                <Row className="show-grid">
                    <Col>
                    <h3>Contact</h3>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}>
                    <h4>Envoyez-moi votre message</h4>
                    </Col>
                    <Col md={6}>
                    <h4>Plan de situation</h4>
                    </Col>
                </Row>
            </Grid>
        )
        return (
            gridInstance
        )
    }
}

export default Contact;
