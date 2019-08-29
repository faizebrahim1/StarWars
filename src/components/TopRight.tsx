import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Card, Table, Col, Row, Button, Container, ButtonGroup } from 'react-bootstrap'
import AppProps from '../stores/index'

@inject('filmStore')
@observer
class TopRight extends Component<AppProps> {
    onArrayChosen = (event: any) => {
        console.log('xxx');
        const {target} = event;
        const propertyName = target.attributes["arrayproperty"].value;
        this.props.filmStore!.changeArrayPropertyName(propertyName);
    }

    render() {
        const { film, stringPropertyNames, arrayPropertyNames } = this.props.filmStore!;
        const detailBody: Array<any> = [];
        const detailArrayButtons: Array<any> = [];
        for (const propName in film) {
            if (propName === "title")
                continue;
            if (stringPropertyNames.has(propName))
                detailBody.push(
                    <Row key={propName}>
                        <Col className="font-weight-bold" md={4}>{propName}</Col>
                        <Col>{film[propName]}
                        </Col>
                    </Row>
                );
            else if (arrayPropertyNames.has(propName))
                detailArrayButtons.push(
                    //@ts-ignore
                    <Button
                        size="sm"
                        key={propName}
                        onClick={this.onArrayChosen}
                        arrayproperty={propName}
                        name="arrayChooser"
                        className="btn-danger"
                    >
                        {propName}
                    </Button >
                );
        }

        return (
            <div>
                {< Card bg="primary" text="white" className="flex-fill" >
                    <Card.Header as="h6">{film.title}</Card.Header>
                    <Container>
                        {detailBody}
                        <Row></Row>
                    </Container>
                    <Card.Footer className="text-center">
                        <div className="d-flex flex-column">
                            <ButtonGroup aria-label="Basic example">
                                {detailArrayButtons}
                            </ButtonGroup>
                        </div>
                    </Card.Footer>
                </Card >}
            </div >
        )
    }
}

export default TopRight;