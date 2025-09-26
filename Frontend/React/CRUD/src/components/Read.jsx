import "./Read.css";

const Read = (props) => {
  const todos = props.todo;
  const setTodo = props.setTodo;



  const deleteHandler = (id) => {
    const remainsTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    // set kiya bacha hua data
    setTodo(remainsTodo);
  };






  // for rendering the data
  const rendering = todos.map((e) => {
    return (
      <li key={e.id} className="todo-item">
        <span className="todo-title">
          {e.title}
          {e.isImportant && <span className="important-badge">Imp</span>}
        </span>


        <button className="delete-btn" onClick={() => deleteHandler(e.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="todo-container">
      <h1 className="todo-heading">📋 Pending Todos</h1>
      <ol className="todo-list">{rendering}</ol>
    </div>
  );
};

export default Read;
