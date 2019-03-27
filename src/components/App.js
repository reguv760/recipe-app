import React from 'react';
import Form from './Form';
import Recipes from './Recipes';
import DotEnv from 'dotenv';

class App extends React.Component{
	//constructor() deprecated in React >= 16.0
	
	//init state::
	state = {
		connected: undefined,
		recipes: [],
	}

	componentDidMount = () =>
	{
		DotEnv.config();
	}

	getRecipe = async (e) =>
	{
		
		//store an input box value into a const
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();

		//init fetch

		//alternate call if there's CORS issue
		//const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${process.env.API_KEY}&q=${recipeName}&count=10`);

		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${recipeName}&count=10`).then(this.handleErrors).then(response => console.log("connected") ).catch(error => this.setState({connected: false }) );


		if (api_call)
		{
			//create const to store + parse api data:::	
			const data = await api_call.json()

			//store data as an array in state
			this.setState({ recipes: data.recipes, connected: true})


			console.log(this.state.recipes);

		} else 
		{
			this.setState({ connected: false})
			console.log("cannot access api");
		}
	}

	//helper function for api_call
	handleError = (response) =>
	{
		if (!response.ok)
		{
			throw Error(response.statusText);
		}

		return response;
	}

	render(){
		return(
			<div className="App">
				<header className="App__header">
					<h1 className="App__title">Recipe Search</h1>
				</header>

				<Form getRecipe={ this.getRecipe } />

				{ this.state.connected ? <Recipes recipes={ this.state.recipes } /> : <p>Search for food or ingredient</p> }
			
				</div>
		);
	}
}

export default App; 
