import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './styles.css'

export default class index extends Component {
    render() {
        return (
            <div>
                  <Card.Body>
                    <Card.Text >
                    <p1>capital: Jakarta</p1>
                    </Card.Text>
                    <Card.Text>
                    <p1>Region:Asia</p1>
                    </Card.Text>
                    <Card.Text>
                    <p1>Subregion:South-Eastern Asia</p1>
                    </Card.Text>
                </Card.Body>
            </div>
        )
    }
}
