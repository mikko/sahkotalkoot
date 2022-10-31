import { h } from 'preact';
import { Router } from 'preact-router';
import prices from '../../prices.json'
import devices from '../../devices.json'

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Spot from '../routes/spot';
import Solar from '../routes/solar';

// Calculate statistics for the prices
// Min price
// Max price
// Average price??
// Weekly average
// Day of week average

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" prices={prices} devices={devices}/>
			<Spot path="/spot"/>
			<Solar path="/solar"/>
		</Router>
	</div>
)

export default App;
