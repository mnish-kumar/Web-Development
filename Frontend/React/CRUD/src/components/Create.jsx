import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {

    const todo = props.todo;
    const setTodo = props.setTodo;
 
    const[title, setTitle] = useState("");

    const SubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    const copyData = [...todo]; // create new variable
    copyData.push(newTodo); // copy the newTod in new variable
    setTodo(copyData); // update the value

    // setTodo([...todo] , newTodo);  -> short form of written

    // console.log(newTodo);

    setTitle("");
  };



  return (
    <div>
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
        <input type="checkbox" />
        Complete
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
