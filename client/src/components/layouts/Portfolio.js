import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib/';
// import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    {
        src: "assets/ariiura1-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/ariiura2-900x900.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/ariiura3-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/ecocar1-675x900.jpg",
        width: 3,
        height: 4
    },
    {
        src: "assets/ecocar2-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/ecocar3-900x900.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/cariot2-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/cariot1-900x900.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/ecocar4-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/vodafone1-900x900.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/vodafone2-1200x900.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/vodafone3-675x900.jpg",
        width: 3,
        height: 4
    },
    {
        src: "assets/coia1-1800x900.jpg",
        width: 6,
        height: 3
    },
    {
        src: "assets/coia2-900x900.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/coia3-675x900.jpg",
        width: 3,
        height: 4
    },
];

class Porfolio extends React.Component {

    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    render() {
        return (
            <Grid id="portfolio">
                <Row className="show-grid">

                    <h2 className="text-center" style={{ padding:50}}>PORTFOLIO</h2>

                    <Col>
                        <Gallery photos={photos} onClick={this.openLightbox} />
                        <Lightbox
                            images={photos}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Porfolio;
