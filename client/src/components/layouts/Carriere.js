import React, { Component } from 'react';
import { Grid, Row, Col, Media,FormGroup } from 'react-bootstrap/lib/';
import {archi0} from '../../assets/index';

function FieldGroup({ id, image, subtitle, text, index }) {
    let html;
    if(index % 2 == 0) {
        html = (
            <Media>
                <Media.Left>
                        <img width={64} height={64} alt="thumbnail" src={image}/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading  >
                        {subtitle}
                    </Media.Heading>
                        <p>{text}</p>
                </Media.Body>
            </Media>
            )
    } else {
        html = (
        <Media>
            <Media.Body>
                <Media.Heading  >
                    {subtitle}
                </Media.Heading>
                    <p>{text}</p>
            </Media.Body>
            <Media.Right>
                    <img width={64} height={64} alt="thumbnail" src={image}/>
            </Media.Right>
        </Media>
        )

    }
    return (
        <FormGroup controlId = {id}>
            <Row className   = "show-grid">
                <Col>
                    {html}
                </ Col>
            </ Row>
        </FormGroup>
    );
}

class Carriere extends Component {


    render() {

        const articleInstance =(

            <Grid id="carriere">

        <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
            <Col >
                <h2>CARRIÈRE PROFESSIONNELLE</h2>
            </Col>
        </ Row>

        <FieldGroup
        id="carrierePro"
        image="assets/Archi_0.jpg"
        subtitle="Biographie"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        index = "0"
        />

        <FieldGroup
        id="carrierePro"
        image=""
        subtitle="Style Architectural"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        index = "1"
        />

        <FieldGroup
        id="carrierePro"
        image=""
        subtitle="Projets de références"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        index = "2"
        />

        <FieldGroup
        id="carrierePro"
        img=""
        subtitle="Méthode de travail"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        index = "3"
        />

        </Grid>
        )

        return (
            articleInstance
        )

    }
}

export default Carriere;

       

