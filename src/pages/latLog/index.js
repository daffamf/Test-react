import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import'./styles.css'

export default class index extends Component {
    render() {
        return (
            <div>
                  <Card.Body>
                    <Card.Text className="longlat">
                  <p1>  LatLong:</p1>
                    
                    </Card.Text>
                    <Card.Text className="angka ">
                    <p1>-5.0,120.0</p1>
                  
                    </Card.Text>
                   
                </Card.Body>
            </div>
        )
    }
}
