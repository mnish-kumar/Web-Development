import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipecontextData } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipie = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(RecipecontextData);
  const { register, handleSubmit, reset } = useForm();




  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipe Added Successfully!");
    navigate("/recipes");
    reset();
  };





  return (

    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(SubmitHandler)} className="bg-[#19183B] p-7 rounded flex flex-col w-[50%] text-[#E7F2EF] ">
        <h2 className="text-[#E7F2EF] text-2xl font-bold mb-8">Add Recipe!</h2>
        <input
          type="url"
          className="block border outline-0 cursor-pointer p-2"
          placeholder="Enter Image URL"
        {...register("image")}
      />
      <small className="text-red-300">This is how the error is shown !</small>

      <input
        className="block border outline-0 mt-5 p-2"
        type="text"
        placeholder="Recipe Title"
        {...register("title")}
      />

      <textarea
        className="block border outline-0 mt-5 p-2"
        placeholder="//Recipe Description"
        {...register("description")}
      />

      <textarea
        className="block border outline-0 mt-5 p-2"
        placeholder="//Write Ingredients separated by comma"
        {...register("ingredients")}
      />

      <select
        className="block border outline-0 mt-5  p-2"
        placeholder="//Write Cooking Steps"
        {...register("category")}
      >
        <option value="">Select Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="bg-[#05DBF2] text-white p-2 mt-5 rounded cursor-pointer font-medium">
        Save Recipe
      </button>
    </form>
    </div>
  );
};

export default CreateRecipie;
