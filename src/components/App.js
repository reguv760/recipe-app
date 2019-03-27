import React from 'react';
import Form from './Form';
import Recipes from './Recipes';
import DotEnv from 'dotenv';


import './App.css';

//const API_KEY = "9e093c620e20f422c9f9a2280d2bb042";

//API ::: https://www.food2fork.com/api/search?key={}&q=shredded%20chicken

class App extends React.Component{
	//constructor() deprecated in React >= 16.0
	
	//init state::
	state = {
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

		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${recipeName}&count=10`);

		//create const to store + parse api data:::
		const data = await api_call.json()

		//store data as an array in state
		this.setState({ recipes: data.recipes})


		console.log(this.state.recipes);
		//console.log(data.recipes[0].recipe_id);
	}

	render(){
		return(
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Recipe Search</h1>
				</header>

				<Form getRecipe={ this.getRecipe } />

				<Recipes recipes={ this.state.recipes } />
			</div>
		);
	}
}

export default App; 
