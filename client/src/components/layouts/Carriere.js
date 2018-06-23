import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';
import { Parallax } from 'react-parallax';

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

// Structure

function FieldGroup({ image, subtitle, text }) {
    return (
        <Col sm={6} md={3} className="text-center">
            <img width={100} height={100} alt="thumbnail" src={image} />
            <h4>{subtitle}</h4>
            <p>{text}</p>
        </ Col>
    );
}

// Donnée page carrière 
class Carriere extends Component {
    config = [
        {
            subtitle: "Parcours professionnel",
            image: "assets/icones/cctv-headquarters-china.svg",
            text: "Mon diplôme d’architecte je l’ai obtenu en 1986 à l’Université de Valparaiso au Chili. J’ai travaillé 2 ans à l’Île de Pâques en tant que chef de projet à la mairie et je suis arrivé à Tahiti en 1989.",
        },
        {
            subtitle: "Style architectural",
            image: "assets/icones/modern-house.svg",
            text: "J’ai n’ai pas défini mon style d’architecture. Je m’adapte à la demande et je suis ouvert aux différents styles. Je pars du principe que la maison doit être fonctionnelle tout en prenant en compte les paramètres que me donne le client car c’est sa maison avant tout.",
        },
        {
            subtitle: "Projets de références",
            image: "assets/icones/building.svg",
            text: "Il faut savoir à la base que je ne suis plus autoriser, à cause de la nouvelle réglementation, à réaliser des projets de plus de 600m2 si je ne suis pas en collaboration avec un autre architecte avec la mention d.p.l.g. ou h.m.o.n.p, dû au faite de ne pas avoir un diplôme français. Donc je me contente très souvent de faire des villas. J’ai à mon actif actuellement, environ 350 permis de construire réalisés. J’ai pu réaliser en début de carrière la bibliothèque dans le musée anthropologique de l’Île de Pâques, et à Tahiti, l’immeuble Jambolana en collaboration avec Christian PRETI, l’immeuble d’Ecocar en face de l’aéroport de Faa’a, plusieurs projets dans les îles et beaucoup de villas situées un peu partout mais très souvent dans les lotissements Miri et Pamatai Hills.",
        },
        {
            subtitle: "Médias",
            image: "assets/icones/folded-newspaper.svg",
            text: "J’ai paru 2 ou 3 fois dans le magazine « la Maison du Fenua » pour présenter, avec l’accord du propriétaire, de nombreuses villas que j’ai pu réaliser.",
        }
    ]

    // Rendu du site 

    render() {
        const render = this.config.map((carr, i) => {
            return (<FieldGroup
                id="carrierePro"
                image={carr.image}
                subtitle={carr.subtitle}
                text={carr.text}
                index={i}
            />)
        });

        const articleInstance = (
            <div>
                <Grid style={{ paddingBottom: 80}}>
                    <Row className="text-center">
                        <h2 id="carriere" style={{ paddingTop: 80, paddingBottom: 50 }}>CARRIÈRE PROFESSIONNELLE</h2>
                    </ Row>
                    <Row>
                        {render}
                    </Row>

                </Grid>
                <Parallax bgImage={image1} strength={500} >
                    <div style={{ height: 500 }}></div>
                </Parallax>
            </div>
        )

        return (
            articleInstance
        )
    }
}
export default Carriere;



