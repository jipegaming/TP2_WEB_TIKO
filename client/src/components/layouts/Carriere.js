import React, { Component } from 'react';
import { Grid, Row, Col, Media, FormGroup } from 'react-bootstrap/lib/';

function FieldGroup({ id, image, subtitle, text }) {
    return (
        <FormGroup controlId={id}>
            <Row className="show-grid">
                <Col>
                    <Media.Left>
                        <img width={64} height={64} alt="thumbnail" src={image} />
                    </Media.Left>

                    <Media.Body>
                        <Media.Heading  >
                            {subtitle}
                        </Media.Heading>
                        <p>{text}</p>
                    </Media.Body>
                </ Col>
            </ Row>
        </FormGroup>
    );
}

class Carriere extends Component {


    render() {

        const articleInstance = (

            <Grid id="carriere">

                <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
                    <Col >
                        <h2>CARRIÈRE PROFESSIONNELLE</h2>
                    </Col>
                </ Row>

                <FieldGroup
                    id="carrierePro"
                    image=""
                    subtitle="Biographie"
                    text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus."
                />
        
        <FieldGroup
                    id="carrierePro"
                    image=""
                    subtitle="Style Architectural"
                    text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus."
                />
        
        <FieldGroup
                    id="carrierePro"
                    image=""
                    subtitle="Projets de références"
                    text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus."
                />
        
        <FieldGroup
                    id="carrierePro"
                    img=""
                    subtitle="Méthode de travail"
                    text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus."
                />
        
        </Grid>
        )

        return (
            articleInstance
        )

    }
}

export default Carriere;



