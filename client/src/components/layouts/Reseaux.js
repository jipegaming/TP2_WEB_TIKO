import React, {Component} from 'react';
import { Grid, Row, Col, Media,FormGroup } from 'react-bootstrap/lib/';

function FieldGroup({ id, image, subtitle, text }) {
    return (
        <FormGroup controlId = {id}>
            <Row className   = "show-grid">
                <Col>
                    <Media.Left>
                        <img width={64} height={64} alt="thumbnail" src={image}/>
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

class Reseaux extends Component {
    render() { 
        
        const articleInstance =(

            <Grid id="reseaux">

        <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
            <Col >
                <h2>RÉSEAUX PROFESIONNELS</h2>
            </Col>
        </ Row>

        <FieldGroup
        id="reseauPro"
        image=""
        subtitle="Architectes concurrents"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        />

        <FieldGroup
        id="reseauPro"
        image=""
        subtitle="Avis sur les entrepreneurs"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        />

        <FieldGroup
        id="reseauPro"
        image=""
        subtitle="Choix des personnes"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        />

        {/* <FieldGroup
        id="reseauPro"
        img=""
        subtitle="Méthode de travail"
        text="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus."
        /> */}

        </Grid>
        );

        return ( articleInstance
        )
    }
}

export default Reseaux;
