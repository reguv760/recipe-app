import React from 'react';
import Form from './Form';
import Recipes from './Recipes';
import DotEnv from 'dotenv';

class App extends React.Component{
	//constructor() deprecated in React >= 16.0
	
	//init state::
	state = {
		recipes: [],
		connected: false,
	}

	componentDidMount = () =>
	{
		//localStorage.clear();
		//init dotenv to process .env file
		DotEnv.config();

	 	if (!this.state.connected)
	 	{
	 		localStorage.clear();
	 	} else 
	 	{	 		
		 	const json = localStorage.getItem("recipes");

			const recipes = JSON.parse(json);
			this.setState({ recipes }); //use if key + state are the same value
		 	
	 	}


	}

	componentDidUpdate = () =>
	{
		//use local storage to store input value on return from Recipe.js
		const recipes = JSON.stringify(this.state.recipes);

		localStorage.setItem("recipes", recipes);
	}

	getRecipe = async (e) =>
	{
		
		//store an input box value into a const
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();

		//init fetch

		//alternate call if there's CORS issue
		//const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${process.env.API_KEY}&q=${recipeName}&count=10`);

		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${recipeName}&count=10`);

		//const api_call = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${recipeName}&count=10`).then(this.handleErrors).then(response => console.log("connected") ).catch(error => this.setState({connected: false }) );

		//create const to store + parse api data:::	
		const data = await api_call.json();

		//store data as an array in state
		if (data.recipes !== null)
		{
			this.setState({ recipes: data.recipes, connected: true });
		} else 
		{
			console.log("cannot connect to api");
		}
	
	}

	render(){
		return(
			<div className="App">
				<header className="App__header">
					<h1 className="App__title">Recipe Search</h1>
				</header>

				<Form getRecipe={ this.getRecipe } currentRecipe={ this.state.recipeName } />
				<Recipes recipes={ this.state.recipes } />				

				{ 
					this.state.recipes.length === 0 && <p>Search recipes from any ingredient!</p>					
				}				
				
				</div>
		);
	}
}

export default App; 
