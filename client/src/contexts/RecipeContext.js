import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const [recipeList, setRecipeList] = useState([])
    
    useEffect(() => {
        if(localStorage.getItem('recipe')) {
            setRecipeList(JSON.parse(localStorage.getItem('recipe')))
        }else{
            searchRecipe('chicken')
        }
    }, []);

    const searchRecipe = (recipe) => {
        fetch(`/api/${recipe}`)
        .then(response => response.json())
        .then(response => {
            setRecipeList(response.hits)
            localStorage.setItem('recipe', JSON.stringify(response.hits))
        })        
    }

    return (
        <RecipeContext.Provider value={{ recipeList, searchRecipe }}>
          {props.children}
        </RecipeContext.Provider>
    );
}

export default RecipeContextProvider;