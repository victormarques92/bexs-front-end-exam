import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import History from './history'

// Views
import Checkout from '../views/checkout'

const Routes = () => (
	<Router history={History}>
		<Switch>
			
			<Route path="/" exact={true} component={Checkout} />

			<Redirect path="*" to={'/not-found'} />
		</Switch>
	</Router>
)

export default Routes
