import { createContext, useEffect, useState } from "react";
export const RecipecontextData = createContext(null);

export const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes") || "[]"));
  }, []);

  // console.log(data);
  return (
    <RecipecontextData.Provider value={{ data, setdata }}>
      {props.children}
    </RecipecontextData.Provider>
  );
};

export default RecipeContext;
