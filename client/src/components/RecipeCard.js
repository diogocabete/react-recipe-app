import React from 'react';
import { Link } from 'react-router-dom'

const Recipes = (props) => {
    const recipe = props.recipe
    const calories = Math.round(recipe.calories)

    return (
        <div className="card">
            <img src={recipe.image} alt="recipe" style={{ width: '100%' }}/>

            <p className="recipe-title">{recipe.label}</p>

            <div className="container">
                <h3>{calories} calories</h3>
                <h3 className="link">
                    <Link to = {{
                        pathname: `/recipe/${recipe.label}`,
                        state: {
                            recipe: recipe
                        }
                        }}
                        style={{ textDecoration: 'none'}}
                        >
                        View Recipe
                    </Link>
                </h3>
            </div>
            
        </div>
    );
}
 
export default Recipes