import React from 'react';

const Recipe = (props) => {
    const recipe = props.location.state.recipe
    const ingredients = recipe.ingredientLines
    return (
        <div className='recipe'>
            <img src={recipe.image} alt="recipe" className='image'/>
            <ul>{ingredients.map(item => <li>{item}</li>)}</ul>
        </div>
    );
}
 
export default Recipe;