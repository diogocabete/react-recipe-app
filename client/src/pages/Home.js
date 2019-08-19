import React from 'react';
import SearchForm from '../components/SearchForm';
import Recipes from '../components/Recipes';

const Home = () => {
    return (
        <div>
            <SearchForm />
            <Recipes />
        </div>
    );
}
 
export default Home;