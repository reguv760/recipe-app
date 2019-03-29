import React from 'react'; 
import { Link } from 'react-router-dom';

//stateless component that strictly renders
//recipes list based on api_call from App.js

const Recipes = props =>
{
	return(
		<div className="container">
			<div className="row">
				{
					//map function that parse each data
					//then returns each item

					//conditional if props.recipes is NOT defined
					props.recipes ?
					 props.recipes.map((recipe) => 
					 {
					 	return (
					 		<div key={ recipe.recipe_id } className="col-md-4" style={{ marginBottom:"2rem"}}>
					 			<div className="recipes">
						 			<img 
						 				className="recipes__box-img"
						 				src={ recipe.image_url } 
						 				alt={ recipe.title }
						 			/>
						 			<div className="recipe__text">
						 				<h5 className="recipe__text-title"> 
						 					{ /* itinary conditional = if/else statement 

												if (recipe.title.length) < 20 
												{
	 												`${recipe.title}`
												} else 
												{
													`${recipe.title.substring(0,25)}...`
												}

						 					*/ }
						 					{ recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`} 
						 				</h5>
						 				<p className="recipe__text-subtitle">Publisher: <span>
						 						{ recipe.publisher }
						 					</span>
						 				</p>
						 			</div>

						 			<button className="recipes__buttons">
						 				<Link 
						 					to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title } }} >View Recipe</Link>
						 			</button>
					 			</div>
					 		</div>
					 	)
					}) : 
							<div className="container" style={{ marginBottom:"2rem"}}>	
								<p>Cannot load Recipe List</p>
							</div>
				}
			</div>
		
		</div>
	)
}

export default Recipes;
