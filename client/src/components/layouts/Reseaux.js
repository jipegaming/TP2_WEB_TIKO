import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap/lib/';
import { Parallax } from 'react-parallax';

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

function FieldGroup({ image, subtitle, text }) {
    return (
        <Col sm={6} md={3} sm={6} md={3} className="text-center">
            <img width={100} height={100} alt="thumbnail" src={image} className={'mx-auto'} />
            <h4>{subtitle}</h4>
            <p>{text}</p>
        </ Col>
    );
}

// Donnée page Réseaux
class Reseaux extends Component {
    config = [
        {
            subtitle: "Architectes concurrents",
            image: "assets/icones/rural-hotel-houses-with-trees.svg",
            text: "Je ne me penche pas trop sur ce que font les autres en générale. Par contre j'ai bien apprécié l'architecture de l'immeuble JL Polynésie qui a été réalisé par Bertrand Portier et également l'immeuble LeBihan réalisé par Pascal Beaudet & Eric Regaud.",
        },
        {
            subtitle: "Les entrepreneurs locaux",
            image: "assets/icones/hammer-and-three-bricks-construction-symbol.svg",
            text: "Je trouve qu'il manque beaucoup de formation et de professionnalisme pour certains entrepreneurs. Souvent les personnes ayant des brouettes et bétonnières, prétende être entrepreneurs, sans expériences et sans formations.",
        },
        {
            subtitle: "Choix d'entrepreneurs",
            image: "assets/icones/yard-stone-floor-architectonic-detail.svg",
            text: "Je bosse principalement avec l'entreprise FareNov, dirigé par Pierre Vivi, pour toutes les réalisations des projets. Et parfois avec le maître d'œuvre Christian Preti, pour tout ce qui est contrôle de chantier.",
        },
        {
            subtitle: "Méthode de travail",
            image: "assets/icones/drawing-architecture-project-of-a-house.svg",
            text: "Lors de mon premier contact avec le client, j'ai l'habitude de le faire sur son terrain pour que je puisse avoir un aperçu de son environnement et de son voisinage. Ainsi j'aurais une idée bien plus claire de ce que je pourrais lui présenter. Ensuite je lui demande son budget et ces attentes aux niveau architecturale du projet pour lui dire directement si c'est réalisable ou pas. S'en suit tout le travail de plans : esquisses – modèle 3D – plans définitif pour obtention du permis de construire.",
        },
    ]

    // Rendu de la page 

    render() {

        const render = this.config.map((res, i) => {
            return (<FieldGroup
                id="reseaux"
                image={res.image}
                subtitle={res.subtitle}
                text={res.text}
                index={i}
            />)
        });
        const articleInstance = (
            <div>
                <Grid id="reseaux" style={{ paddingBottom: 80}}>
                    <Row>
                        <Col style={{ padding: 50 }} className="text-center">
                            <h2>RÉSEAUX PROFESIONNELS</h2>
                        </Col>
                    </ Row>
                    <Row>
                        {render}
                    </Row>
                </Grid>
                <Parallax bgImage={image1} strength={500}>
                    <div style={{ height: 500 }}></div>
                </Parallax>
            </div>
        )
        return (articleInstance)
    }
}

export default Reseaux;
