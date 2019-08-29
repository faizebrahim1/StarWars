import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Table } from 'react-bootstrap'
import AppProps from '../stores/index'

@inject('filmStore')
@observer
class TopLeft extends Component<AppProps> {

    handleChange = (event: any) => {
        const { target } = event;
        this.props.filmStore!.changeFilm(target.id);
    }

    render() {
        const { films, changeFilm } = this.props.filmStore!;
        const items = films.map(film => (
            <tr key={film.episode_id}>
                <td>
                    <input id={film.episode_id} onChange={this.handleChange} name="filmRadio" type="radio" />
                </td>
                <td>{film.title}</td>
                <td>{film.release_date}</td>
            </tr>
        ))
        return (
            <Card bg="dark" text="white" className="flex-fill">
                <Card.Header as="h6">Films</Card.Header>
                <Table striped responsive hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </Card>
        )
    }
}
export default TopLeft;