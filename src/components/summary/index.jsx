import React, { Component } from 'react'

// Grid
import { Row, Col } from '../../styles/grid'

// Styles
import { List, Contour } from './styles'
import { Colors } from '../../styles/styleds'

export default class Summary extends Component {
    render() {
        return <List>
            <Row>
                <Col xs={10}>
                    <Contour height={18} />
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col xs={9}>
                    <Contour mgBottom={10} />
                </Col>
                <Col xs={3}>
                    <Contour />
                </Col>
            </Row>

            <Row>
                <Col xs={9}>
                    <Contour mgBottom={10} />
                </Col>
                <Col xs={3}>
                    <Contour />
                </Col>
            </Row>

            <Row>
                <Col xs={9}>
                    <Contour />
                </Col>
                <Col xs={3}>
                    <Contour />
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col xs={9}>
                    <Contour color={Colors.silver} />
                </Col>
                <Col xs={3}>
                    <Contour color={Colors.silver} />
                </Col>
            </Row>
        </List>
    }
}
