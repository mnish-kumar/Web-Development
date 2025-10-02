import { Link } from "react-router-dom";

const RecipeCard = (props) => {

  const {id, image, title, description, ingredients, category} = props.recipe;


  return (
    <Link 
      to={`/recipes/details/${id}`} 
      className="duration-100 hover:scale-103 border p-3 rounded-lg  w-[20%] h-[370px] overflow-hidden">

      <img src={image} alt={title} className="w-[100%] h-46 object-cover rounded-md mb-1 object-center" />
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mb-1 leading-tight text-sm">{description.slice(0, 50)}...{" "}
        <small className='text-blue-400'>more info</small>
      </p>

      <p className="mb-1 text-sm leading-tight">
        <strong className="text-pink-500 text-lg">Ingredients: </strong> 
        {ingredients}
      </p>
      
      <p className="text-sm">
        <strong className="text-pink-500 text-lg">Category: </strong> {category}
      </p>
    </Link>
  )
}

export default RecipeCard