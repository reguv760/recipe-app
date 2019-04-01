//individual recipe item:::
import React from 'react';
import { Link } from 'react-router-dom';


class Recipe extends React.Component{

	state = 
	{
		activeRecipe: [],
	}

	//lifecycle hook
	componentDidMount = async () =>
	{
		//copy + pasted from getRecipe() in App.js

		//this is coming from <Link state> from App.js
		const title = this.props.location.state.recipe;

		//init fetch

		//alternate call if there's CORS issue
		//const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${title}`);

		const req = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${title}`);

		//create const to store + parse api data:::
		const res = await req.json();

		//grabs the first item in recipes to diplay:::
		this.setState({ activeRecipe: res.recipes[0] });

		//console.log(this.state.activeRecipe);

	} 

	render(){

		const recipe = this.state.activeRecipe;

		return(
			<div className="container">
				{ this.state.activeRecipe !== 0 && 

					<div className="active-recipe">
						<h2 className="active-recipe__title">{ recipe.title }</h2>
						<h4 className="active-recipe__publisher">Publisher: <a href={ recipe.publisher_url } target="_blank" rel="noopener noreferrer">{ recipe.publisher }</a></h4>
						<img className="active-recipe__img"
							src={ recipe.image_url } alt={ recipe.title } />

						<p className="active-recipe__website">Check out the recipe at: {''}
							<a href={ recipe.publisher_url }
								target="_blank" 
								rel="noopener noreferrer"
							>{ recipe.publisher_url }</a>
						</p>

						<button className="active-recipe__button">
							<Link to="/">Go Home</Link></button>
					</div>
				}
			</div>
		);
	}
}

export default Recipe; 
