import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AppProps from '../stores/index'
import { Table, Card } from 'react-bootstrap'
@inject('filmStore')
@observer
class BottomLeft extends Component<AppProps> {
    render() {
        const { filmArrayDetail, arrayPropertyName } = this.props.filmStore!;

        if (filmArrayDetail.length == 0) {
            return (
                <div>No Selection Made</div>
            )
        }


        let properties = [];
        for (let prop in filmArrayDetail[0]) {
            properties.push(prop);
        }
        let x = [];
        console.log(new Date())
        for (let obj of filmArrayDetail) {
            let cells = [];
            for (let prop of properties) {
                cells.push(<td>{obj[prop]}</td>)
            }
            x.push(
                <tr className="text-white">
                    {cells}
                </tr>
            )
        }

        let columns = properties.map(col => <th>{col}</th>);

        return (
            <Card bg="success" text="white" className="flex-fill">
                <Card.Header as="h6">{arrayPropertyName}</Card.Header>
                <Table striped responsive hover size="sm">
                    <tr className="text-white">{columns}</tr>
                    <tbody>
                        {x}
                    </tbody>
                </Table>
            </Card>
        )
    }
}

export default BottomLeft