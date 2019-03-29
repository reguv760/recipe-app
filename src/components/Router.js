import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Recipe from './Recipe';

const Router = () =>
{
	return(
		<BrowserRouter>
			<Switch>
				<Route path={ `${process.env.PUBLIC_URL} + "/"`} component={ App } exact />

				{ /* dynamic routing based on id */ }
				<Route path={ `${process.env.PUBLIC_URL} + "/recipe/:id"`} component={ Recipe } />
			</Switch>
		</BrowserRouter>
	)
}

export default Router;

