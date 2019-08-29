import React, { Component } from 'react';
import logo from './logo.svg';
import { IFilmStore } from '../stores/filmStores'
import { inject, observer } from 'mobx-react';
import { Container, Row, Col } from 'react-bootstrap'
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import BottomLeft from './BottomLeft'
import AppProps from '../stores/index'

@inject('filmStore')
@observer
class Body extends Component<AppProps> {

    render() {
        return (
            <Container fluid className="mainContainer">
                <Row>
                    <Col md={5} className="align-items-stretch d-flex">
                        <TopLeft />
                    </Col>
                    <Col md={7} className="align-items-stretch">
                        <TopRight />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col className="align-items-stretch">
                        <BottomLeft />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Body;