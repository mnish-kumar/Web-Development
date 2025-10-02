import { useContext, useEffect, useState } from "react";
import { RecipecontextData } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setdata } = useContext(RecipecontextData);
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      description: recipe?.description,
      ingredients: recipe?.ingredients,
      category: recipe?.category,
    },
  });

  const UpdateHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => recipe.id == params.id);

    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...recipe };
    setdata(copydata);

    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipe Updated Successfully!");
  };

  const deleteHandler = () => {
    const deleteId = data.filter((recipe) => recipe.id != params.id);
    setdata(deleteId);

    localStorage.setItem("recipes", JSON.stringify(deleteId));
    toast.success("Recipe Deleted Successfully!");
    navigate("/recipes");
  };









  const [Favorite, setFavroite] = useState(
    JSON.parse(localStorage.getItem("fav") || "[]")
  );
  const FavHandler = () => {
    const updatedFav = [...Favorite, recipe];
    setFavroite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.success("Added to favorites!");
  };

  const UnFavHandler = () => {
    const filterData = Favorite.filter((f) => f.id !== recipe.id);
    setFavroite(filterData);
    localStorage.setItem("fav", JSON.stringify(filterData));
    toast.success("Removed from favorites!");
  };

  

  return recipe ? (
    <div className="flex gap-10 justify-center items-start text-white">
      <div className="relative left w-1/2  p-2">


        {Favorite.find((f) => f.id == recipe.id) ? 
          <i
            onClick={UnFavHandler}
            className="absolute right-[10%] top-5 text-[#05DBF2] text-3xl ri-heart-fill"
          ></i>
         : 
          <i
            onClick={FavHandler}
            className="absolute right-[10%] top-5 text-[#05DBF2] text-3xl ri-heart-line"
          ></i>
        }

        <small className="absolute right-[8.5%] top-12 font-medium text-[8px]">
          Add Favroute
        </small>

        <h1 className="font-bold text-5xl underline mb-5">{recipe.title}</h1>
        <img
          className="h-[50vh] rounded hover:scale-101 duration-200 object-cover object-center w-[80%] mb-1"
          src={recipe.image}
          alt={recipe.title}
        />
        <p className="text-sm">{recipe.description}</p>

        <h2 className="font-bold text-3xl mt-5">Ingredients:</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.split(",").map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>

        <h2 className="font-bold text-3xl mt-5">Category:</h2>
        <p>{recipe.category}</p>
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
            {...register("ingredients")}
          />

          <select
            className="block border-b outline-0 mt-5 text-gray-400"
            placeholder="//Write Cooking Steps"
            {...register("category")}
          >
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          <button className="hover:scale-101 duration-150 bg-blue-500 block text-white p-2 mt-5 rounded cursor-pointer">
            Update Recipe
          </button>

          <button
            onClick={deleteHandler}
            className="hover:scale-101 duration-150 bg-red-700 text-white p-2 mt-5 rounded cursor-pointer"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default SingleRecipe;
