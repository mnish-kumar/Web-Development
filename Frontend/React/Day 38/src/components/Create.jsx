import { useState } from "react";

const Create = (props) => {
  console.log(props);

  const [userName, setUserName] = useState("");
  const [Age, setAge] = useState(18);



  const submitHandler = (e) => {
    e.preventDefault();  // reload se rokega

    const newUSer = {userName, Age }; // api, --backend, --server
    console.log(newUSer);
  };





  return (
    <div>
      <h1>Register User!</h1>

      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Enter User Name"
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          type="number"
          placeholder="Enter Age"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
