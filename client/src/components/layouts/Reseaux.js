import React, {Component} from 'react';
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

class Reseaux extends Component {
    render() { 
        
        const gridInstance = (
        <Grid>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                    <code>&lt;{'Col sm={6} md={3}'} /">">">">&gt;</code>
                    <br />
                    {dummySentences.slice(0, 6).join(' ')}
                </Col>
                <Col sm={6} md={3}>
                    <code>&lt;{'Col sm={6} md={3}'} /">">">">&gt;</code>
                    <br />
                    {dummySentences.slice(0, 4).join(' ')}
                </Col>
            </Row>
        </Grid>
        );

        return ( gridInstance
        )
    }
}

export default Reseaux;
