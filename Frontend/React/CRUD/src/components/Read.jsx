const Read = (props) => {

    const todo = props.todo;
    const setTodo = props.setTodo;

  // for rendering the data
  const rendering = todo.map((e) => {
    return <li key={e.id}>{e.title}</li>;
  });

  return (
    <div>
      <h1>Pending Todos</h1>
      <ol>{rendering}</ol>
    </div>
  );
};

export default Read;
