import React, { Component, Fragment } from 'react'

// Grid
import { Container, Row, Col } from '../../styles/grid'

// Components
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Summary from '../../components/summary'

export default class index extends Component {
    render() {
        return <Fragment>
            <Navigation />

            <Container>
                <Row>
                    <Col lg={8}>
                        <div style={{ backgroundColor: 'white', marginBottom: 30 }}>
                            <h1>Form</h1>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <Summary />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Fragment>
    }
}
