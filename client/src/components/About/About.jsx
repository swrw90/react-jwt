import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron, Thumbnail, Well, PageHeader } from 'react-bootstrap';
import './About.css';


class About extends Component {
    componentWillMount() {

    }
    
    render() {
        return (
            <div><Grid>
                <Jumbotron className="about-banner">
                    <h1>About Us</h1>
                    <p className="about-banner-text">Our passion is our people.</p>
                </Jumbotron>

                <Row>
                    <Col xs={12} sm={8} className="main-section">
                        <h3>Clothing Co. <p>Est. 2018</p></h3>
                        <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                        <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.
                        Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.
                        Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/dog-people.jpg" />
                        <p>Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.
                        Ridiculus mus pellentesque, maecenas hac praesent ante habitasse scelerisque tristique neque. Luctus conubia cum accumsan risus sociosqu, aliquet tempor dis.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <PageHeader className="employees-header">Meet Our Team</PageHeader>
                    <div className="employees-container">
                        <Col xs={6} md={4} lg={4} >
                            <div class="card">
                                <Image className="employees" href="#" alt="171x180" src="assets/employee1.jpg" circle />
                                <h3 className="card-title">Jeremy Wilkins<p>Designer</p></h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Image className="employees" href="#" alt="171x180" src="assets/employee2.jpg" circle />
                            <div class="card">
                                <h3 className="card-title">Jeremy Wilkins<p>Marketing</p></h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Image className="employees" href="#" alt="171x180" src="assets/employee3.jpg" circle />
                            <div class="card">
                                <h3 className="card-title">Jeremy Wilkins<p>Designer</p></h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Image className="employees" href="#" alt="171x180" src="assets/employee4.jpg" circle />
                            <div class="card">
                                <h3 className="card-title">Jeremy Wilkins<p>Web Developer</p></h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Image className="employees" href="#" alt="171x180" src="assets/employee5.jpg" circle />
                            <div class="card">
                                <h3 className="card-title">Jeremy Wilkins<p>Process Engineer</p></h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <Image className="employees" href="#" alt="171x180" src="assets/employee6.jpg" circle />
                            <div class="card">
                                <h3 className="card-title">Jeremy Wilkins<p>Sales Coordinator</p></h3>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid>
            </div>
        );
    }
}

export default About;
