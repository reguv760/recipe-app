import React from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom';

import App from './App';
import Recipe from './Recipe';
import NoMatch from './NoMatch';

class Router extends React.Component
{

	render()
	{
		return(
			<HashRouter>
				<Switch>					
					<Route path={ "/"} component={ App } exact />

					{ /* dynamic routing based on id */ }
					<Route path={ "/recipe/:id"} component={ Recipe } />
					<Route component={NoMatch} />
				</Switch>
			</HashRouter>
		)
	}
}

export default Router;

