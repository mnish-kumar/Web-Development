import {useContext} from 'react';
import { recipecontext as dataContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';


const Recipes = () => {
  const { data } = useContext(dataContext);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className='flex gap-15 flex-wrap justify-center'>
      {data.length > 0 ? renderRecipes : "No recipes found!"}
    </div>
  )
}

export default Recipes