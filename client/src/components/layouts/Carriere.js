import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';

const dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
];

class Carriere extends Component {

    render() {
        const gridInstance = (
            <Grid id="Carriere">
                <Row className="show-grid">
                    <Col>
                        <h3>CARRIÈRE PROFESSIONNELLE</h3>
                    </ Col>
                </ Row>
                <Row className="show-grid">
                    <Col>
                        <code>CARRIERE PRO</code>
                        <br />
                        {dummySentences.slice(0, 6).join(' ')}
                    </Col>
                    <Col>
                        <code>&lt;{'Col sm={3} md={3}'} /">">">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 4).join(' ')}
                    </Col>
                    <Col>
                        <code>CARRIERE PRO</code>
                        <br />
                        {dummySentences.slice(0, 6).join(' ')}
                    </Col>
                    <Col>
                        <code>&lt;{'Col sm={3} md={3}'} /">">">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 4).join(' ')}
                    </Col>
                </Row>
            </Grid>
        );
        return (
            gridInstance
        )
    }
}

export default Carriere;
