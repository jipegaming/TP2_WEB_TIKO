import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap/lib';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

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
                        <Form>
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Nom"
                                placeholder="entrez votre nom..."
                            />
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Prénom"
                                placeholder="entrez votre prénom..."
                            />
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Téléphone"
                                placeholder="entrez votre numéro..."
                            />
                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="E-mail"
                                placeholder="entrez votre mail..."
                            />
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Message:</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="écrivez votre message..." />
                            </FormGroup>
                            <Button bsStyle="warning">Envoyer</Button>
                        </Form>
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
