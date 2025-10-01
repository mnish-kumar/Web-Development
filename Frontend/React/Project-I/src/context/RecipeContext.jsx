import { createContext, useState } from "react";
export const recipecontext = createContext(null);

export const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: "1",
      image: "https://images.pexels.com/photos/8346891/pexels-photo-8346891.jpeg",
      title: "Delicious Pasta",
      description: "this is a test description for pasta recipe which is very tasty and easy to make.",
      ingredients: "Pasta, tomato sauce, cheese, garlic, olive oil",
      category: "Lunch",
    },
  ]);

  // console.log(data);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;