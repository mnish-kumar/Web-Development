const Read = (props) => {
    const users = props.users;
    // const setusers = props.setusers;

    console.log(props);
    
  
  const render = users.map(function (user, index) {
    return (
      <li key={index}>
        {user.name} | {user.age}
      </li>
    );
  });


  return (
    <div>

      <h1>Rendering</h1>
      <ol>{render}</ol>
      
    </div>
  );
};

export default Read;
