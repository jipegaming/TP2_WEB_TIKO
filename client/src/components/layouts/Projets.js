import React, {Component} from 'react';
import { Grid, Row, Col, Media, FormGroup } from 'react-bootstrap/lib/';
import { Parallax } from 'react-parallax';

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

function FieldGroup({ id, image, subtitle, text, index }) {
    let html;
    if (index % 2 === 0) {
        html = (
            <Media>
                <Media.Left>
                    <img width={100} height={100} alt="thumbnail" src={image} />
                </Media.Left>
                <Media.Body>
                    <Media.Heading  >
                        {subtitle}
                    </Media.Heading>
                    <p  className="text-justify">{text}</p>
                </Media.Body>
            </Media>
        )}

        return (
            <FormGroup controlId={id}>
                <Row className="show-grid">
                    <Col>
                        {html}
                    </ Col>
                </ Row>
            </FormGroup>
        );
    }
class Projets extends Component {
    config = [
        {
            subtitle: "Les projets Tikko",
            image: "assets/Archi_0.jpg",
            text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,tempus viverra turpis. Fusce condimentum nunc ac nisi vulputatefringilla. Donec lacinia congue felis in faucibus.",
        }
    ]
    render() {
        const render = this.config.map((projet, i) => {
            return (<FieldGroup
                id="projets"
                image={projet.image}
                subtitle={projet.subtitle}
                text={projet.text}
                index={i}
            />)
        });
        const articleInstance = (

            <Grid id="Projets">

                <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
                    <Col >

                        <h2>PROJETS FUTURS</h2>
                    </Col>
                </ Row>
                {render}
                <Parallax bgImage={image1}
                    strength={500}>
                    <div style={{ height: 250 }}></div>
                </Parallax>
            </Grid>
        )
        return (articleInstance)
    }
}
export default Projets;
