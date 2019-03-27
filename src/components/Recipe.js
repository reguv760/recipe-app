//individual recipe item:::
import React from 'react';

//const API_KEY = "9e093c620e20f422c9f9a2280d2bb042";

class Recipe extends React.Component{

	state = 
	{
		activeRecipe: [],
	}

	//lifecyce hook
	componentDidmount = async () =>
	{
		//copy + pasted from getRecipe() in App.js

		//this is coming from <Link state> from App.js
		const title = this.props.location.state.recipe;

		//init fetch

		//alternate call if there's CORS issue
		//const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${title}`);

		const req = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${title}&count=10`);

		//create const to store + parse api data:::
		const res = await req.json();
		console.log(res.recipes[0]);
	}

	render(){

		console.log(this.props);

		return(
			<div>Yum!</div>
		);
	}
}

export default Recipe; 
