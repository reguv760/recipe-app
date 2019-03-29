import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Recipe from './Recipe';
import NoMatch from './NoMatch';

const Router = () =>
{
	return(
		<BrowserRouter basename={ process.env.REACT_APP_PUBLIC_URL } >
			<Switch>
				<Route path={ "/"} component={ App } exact />

				{ /* dynamic routing based on id */ }
				<Route path={ "/recipe/:id"} component={ Recipe } />
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
	)
}

export default Router;

