import React from 'react';
// import { Grid, Row, Col, Thumbnail } from 'react-bootstrap/lib/';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    {
        src: "assets/1024x768-ariiura1.jpg",
        width: 4,
        height: 3
    },
    {
        src: "assets/768x768-ariiura2.jpg",
        width: 1,
        height: 1
    },
    {
        src: "assets/1024x768-ariiura3.jpg",
        width: 4,
        height: 3
    }
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
            <div>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox
                    images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        );

        // const gridInstance = (
        //     <Grid id="portfolio">
        //         <Row style={{ paddingTop: 50, paddingBottom: 30 }} className="show-grid">
        //             <Col>
        //                 <h2>PORTFOLIO</h2>
        //             </Col>
        //         </Row>
        //         <Row className="show-grid">
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-manu.jpg" href="assets/640x480-manu.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ariiura1.jpg" href="assets/640x480-ariiura1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ariiura2.jpg" href="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ariiura3.jpg" href="assets/640x480-ariiura3.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //         </Row>
        //         <Row className="show-grid">
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ecocar1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ecocar2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-cariot1.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //             <Col xs={6} md={3} style={{ paddingTop: 20 }}>
        //                 <Thumbnail src="assets/640x480-ariiura2.jpg" style={{ height: '100%', width: '100%' }} alt="thumbnail" class="img-thumbnail" />
        //             </Col>
        //         </Row>
        //     </Grid>
        // )
        // return (
        //     gridInstance
        // )
    }
}

export default Porfolio;
