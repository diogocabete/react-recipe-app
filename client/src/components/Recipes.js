import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const { recipeList } = useContext(RecipeContext);

    const recipes = recipeList.map(item => 
        <RecipeCard
            key={item.recipe.label}
            recipe={item.recipe}
        />
    )

    return (
        <div className="card-container">
            {recipes}
        </div>
    );
}
 
export default Recipes