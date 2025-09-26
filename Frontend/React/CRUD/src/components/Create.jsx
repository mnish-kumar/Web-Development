import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Create.css";

const Create = ({todo, setTodo}) => {

  const {
    register, 
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

    
  const [isImportant, setisImportant] = useState(false);

  const SubmitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    data.isImportant = isImportant;
    

    // if (!title.trim) return;

    // const newTodo = {
    //   id: nanoid(),
    //   // title,
    //   isCompleted: false,
    //   isImportant: isImportant,
    // };

    // --> useState
    const copyData = [...todo]; // create new variable
    copyData.push(data); // copy the newTod in new variable
    setTodo(copyData); // update the value

    // setTodo([...todo] , newTodo);  -> short form of written

    reset();

    
    setisImportant(false);
  };
  


  return (
    <div className="input-box">
      <h1>To do Tasks:</h1>

      <form onSubmit={handleSubmit (SubmitHandler)}>
        <input
          {...register("title", {required: "Tittle cannot be empty"})}
          type="text"
          placeholder="Details"
        />
        {errors && errors.title && errors.title.message && <small>{errors.title.message}</small>}

        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => setisImportant(e.target.checked)}
            checked={isImportant}
          />{" "}
          Mark as important
        </label>


        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Create;