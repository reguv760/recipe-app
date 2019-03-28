import React from 'react';

/* getRecipe is 'inherited' from App.js and
received in Form as a props, which can be called from wtihin */
const Form = props =>
{
	return(
	  	<form onSubmit={ props.getRecipe }>
	  		<input className="form__input" type="text" name="recipeName" />
	  		<button className="form__button">Search</button>
	  	</form>
	);
}


export default Form;
