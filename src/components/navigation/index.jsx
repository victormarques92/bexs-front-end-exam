import React, { Component } from 'react'

// Grid
import { Container } from '../../styles/grid'

// Styles
import { Nav } from './styles'

// Images
import Logo from '../../assets/images/logo.svg'

export default class Navigation extends Component {
    render() {
        return <Nav>
            <Container>
                <div className="content">
                    <img className="brand" src={Logo} alt="Demo Shop" />

                    <ul className="menu">
                        <li className="item"></li>
                        <li className="item"></li>
                        <li className="item"></li>
                        <li className="item"></li>
                        <li className="item"></li>
                    </ul>
                </div>
            </Container>
        </Nav>
    }
}
