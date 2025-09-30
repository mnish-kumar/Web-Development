import {useContext} from 'react';
import { recipecontext as dataContext } from '../context/RecipeContext';


const Recipes = () => {
  const { data } = useContext(dataContext);

  const renderRecipes = data.map((recipe) => (
    <div key={recipe.id} className="border p-4 rounded-lg  w-[20%] h-auto">
      <img src={recipe.image} alt={recipe.title} className="w-[100%] h-48 object-cover rounded-md mb-4 object-center" />
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p className="mb-2">{recipe.description}</p>
      <p className="mb-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p className="mb-2"><strong>Category:</strong> {recipe.category}</p>
    </div>
  ));

  return (
    <div className='flex gap-15 flex-wrap'>{renderRecipes}</div>
  )
}

export default Recipes