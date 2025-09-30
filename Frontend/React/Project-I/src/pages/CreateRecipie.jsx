import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const CreateRecipie = () => {
  const { register, handleSubmit,reset } = useForm();
  const { data , setdata } = useContext(recipecontext);

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)

    reset();
  }

  return (

    <form onSubmit={handleSubmit(SubmitHandler)}>

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
        <option value="">Select Difficulty Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> 

      <button className="bg-blue-500 text-white p-2 mt-5 rounded cursor-pointer">Save Recipe</button>
    </form>
  );
};

export default CreateRecipie;
