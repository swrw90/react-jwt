import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron, PageHeader } from 'react-bootstrap';
import './About.css';
import { connect } from 'react-redux';
import { getEmployeesData, LoadingState } from '../../redux/reducers/employee.reducers';
import Employee from './AboutContainer';

class About extends Component {
    componentWillMount() {
        this.props.getEmployees();
    }

    displayEmployeeComponent() {
        switch (this.props.loadingState) {
            case LoadingState.pending:
                break;
            case LoadingState.loading:
                break;
            case LoadingState.finished:
                var employeesComponent = this.props.employees.employees.map(function (employee) {
                    return <Employee key={employee._id} employee={employee} />
                });
                return employeesComponent;
            default:
                return console.log("display employee component called");
        }
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
                        {this.displayEmployeeComponent()}
                    </div>
                </Row>
            </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: () => dispatch(getEmployeesData()),
    };
};

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        loadingState: state.employees.loadingState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);