import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap/lib';
import GoogleMapReact from 'google-map-react';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {

    static defaultProps = {
        center: {
            lat: -17.634410,
            lng: -149.602809
        },
        zoom: 17
    };

    render() {
        const gridInstance = (
            <Grid id="contact">
                <Row className="show-grid">
                    <Col style={{ padding: 50 }} className="text-center">
                        <h2>CONTACT</h2>
                        <hr style={{ 'border-width': "2px 10px 4px 20px" }}></hr>
                    </Col>
                </Row>
                <Row className="show-grid" style={{ backgroundImage: "url('assets/contact.jpg')" }}>
                    <Col md={6}>
                    <div className="text-center">
                        <h3>Information</h3>
                        <div style={{ paddingTop: 20 }}>
                            <p>Roberto RODRIGUEZ - tikko@mail.pf</p>
                            <p>N°TAHITI 396887 - R.C. 27078A</p>
                            <p>Zone Industrielle de la Punaruu</p>
                            <p>Immeuble Ramata 1er étage</p>
                        </div>
                    </div>
                        <h3 className="text-center">Envoyez-moi votre message</h3>
                        <Form style={{ paddingTop: 20 }} method="POST" action="https://formspree.io/jpalvarez.tcc@gmail.com">
                            <Row>
                                <Col sm={6}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Nom:"
                                        placeholder="entrez votre nom..."
                                    />
                                </Col>
                                <Col sm={6}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Prénom:"
                                        placeholder="entrez votre prénom..."
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Téléphone:"
                                        placeholder="entrez votre numéro..."
                                    />
                                </Col>
                                <Col sm={8}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="email"
                                        label="E-mail:"
                                        placeholder="entrez votre mail..."
                                    />
                                </Col>
                            </Row>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Message:</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="écrivez votre message..." />
                            </FormGroup>
                            <div className="text-center">
                            <Button bsStyle="warning" type="submit">Envoyer</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h3 className="text-center">Plan de situation</h3>
                        <div className='google-map' style={{ height: 500, width: 500, paddingTop: 20, paddingBottom: 50 }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDgM3E3-6L-xeln5pOHXhnVQsy6e711o5Y" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}>
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text={'Kreyser Avrora'} />
                            </GoogleMapReact>
                        </div>
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