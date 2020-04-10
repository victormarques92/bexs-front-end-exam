import React, { Fragment, Component } from 'react'
import { GlobalStyle } from './styles/global'
import Routes from './routes'

export default class App extends Component {
	render() {
		return ( 
			<Fragment >
				<GlobalStyle />

				<Routes />
			</Fragment>
		)
	}
}
