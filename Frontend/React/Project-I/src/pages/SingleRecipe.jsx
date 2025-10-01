import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const navigate = useNavigate();






  const { register, handleSubmit,reset } = useForm({defaultValues: {
    title: recipe.title,
    image: recipe.image,
    description: recipe.description,
    ingredients: recipe.ingredients,
    category: recipe.category
  }});






  const UpdateHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => recipe.id == params.id);

    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...recipe };
    setdata(copydata);
    toast.success("Recipe Updated Successfully!");
    reset();
  }

  const deleteHandler = () => {
    const deleteId = data.filter((recipe) => recipe.id != params.id);
    setdata(deleteId);
    toast.success("Recipe Deleted Successfully!");
    navigate("/recipes");
  }






  

  return recipe ? (
    <div className="flex gap-10 justify-center items-start text-white">
      <div className="left w-1/2">
        <h1 className="font-bold text-5xl underline mb-5">{recipe.title}</h1>
        <img
          className="h-[70vh] rounded hover:scale-101 duration-200 object-cover object-center w-[80%]"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>

      
      <div className="right w-1/2 border p-5 rounded-lg  ">
        <h2 className="font-bold text-3xl mb-3">Update Recipe:</h2>
        <form onSubmit={handleSubmit(UpdateHandler)}>
          <input
            type="url"
            className="block border-b outline-0 cursor-pointer p-2"
            placeholder="Enter Image URL"
            {...register("image")}
          />
          <small className="text-red-300">This is how the error is shown</small>

          <input
            className="block border-b outline-0 mt-5"
            type="text"
            placeholder="Recipe Title"
            {...register("title")}
          />

          <textarea
            className="block border-b outline-0 mt-5"
            placeholder="//Recipe Description"
            {...register("description")}
          />

          <textarea
            className="block border-b outline-0 mt-5"
            placeholder="//Write Ingredients separated by comma"
            value={recipe.ingredients}
            {...register("ingredients")}
          />

          <select
            className="block border-b outline-0 mt-5 text-gray-400"
            placeholder="//Write Cooking Steps"
            {...register("category")}
          >
            <option value="">Select Difficulty Level</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <button className="hover:scale-101 duration-150 bg-blue-500 block text-white p-2 mt-5 rounded cursor-pointer">
            Update Recipe
          </button>
          <button onClick={deleteHandler} className="hover:scale-101 duration-150 bg-red-700 text-white p-2 mt-5 rounded cursor-pointer">
            Update Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default SingleRecipe;
