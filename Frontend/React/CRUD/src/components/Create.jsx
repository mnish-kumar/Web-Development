import { nanoid } from "nanoid";
import { useState } from "react";
import "./Create.css";

const Create = (props) => {

  const todo = props.todo;
  const setTodo = props.setTodo;
 
  const[title, setTitle] = useState("");
  const [isImportant, setisImportant] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim) return;

    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
      isImportant: isImportant,
    };

    const copyData = [...todo]; // create new variable
    copyData.push(newTodo); // copy the newTod in new variable
    setTodo(copyData); // update the value

    // setTodo([...todo] , newTodo);  -> short form of written

    // console.log(newTodo);

    setTitle("");
    setisImportant(false);
  };



  return (
    <div className="input-box">
      <h1>To do Tasks:</h1>

      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Deatils"
        />

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
