import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import SendMessage from './pages/SendMessage';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/register' component={Register} />
				<Route path='/sendMessage' component={SendMessage} />
			</Switch>
		</BrowserRouter>
	);
}
