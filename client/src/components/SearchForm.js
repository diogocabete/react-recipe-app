import React, { useContext, useState } from 'react';
import { RecipeContext } from '../contexts/RecipeContext'

const SearchForm = () => {
    const { searchRecipe } = useContext(RecipeContext);
    const [recipe, setRecipe] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(recipe === ''){
            alert('Must enter a search key')
        }else{
            searchRecipe(recipe);
            setRecipe('')
        }
    }

    return (        
        <form onSubmit={handleSubmit}>
            <br/>
            <input 
                type='text'
                placeholder='Search for a recipe...'
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
            />
            <br/>
            <br/>
        </form>
    );
}
 
export default SearchForm;