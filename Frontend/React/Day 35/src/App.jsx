// const App = () => {
//   // Here to write JS logic

import { useState } from "react"



//   // without parameter function
//   // const handleClick = ()=>{
//   //   alert("Button clicked!");
//   // }


//   // with parameter function
//   const ParameterFnc = (msg) =>{
//     alert(msg);
//   }
//   const wrapperParameter = ()=>{
//     ParameterFnc("Raat akeli hai");
//   }



//   return (
//     <>
//       <div>App Of React</div>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={wrapperParameter}>Clickk.</button>
//     </>

//   );
// }

// export default App












// function App() {

//   let n = 10; //Number
//   let s = "Hey String"  //String
//   let b = true; // boolean
//   let nu = null;
//   let un = undefined;

//   let arr = [1, 2, "hello", true, undefined, null];
//   let obj = {
//     name: 'john',
//     age: 21
//   }

//   return (
//     <div>
//       <h1>DataTypes :</h1>
//       <h2>Number: {n}</h2>
//       <h3>String: {s}</h3>
//       <h4>Boolean: {b}</h4>
//       <h5>Null: {nu}</h5>
//       <h6>Undefined: {un}</h6>

//       <h5>Array: {arr}</h5>
//       <h6>Object: {obj.name}</h6>
//     </div>
//   )
// }
// export default App






// Object to JSX conert

// const App = () => {

//   const profiles = [
//     {name:"manish", age: 22},
//     {name:"harsh", age:25},
//     {name:"dhanesh", age:24}
//   ];

//   const updateProfiles = profiles.map((profile, index) => {
//     return (
//       <li key={index}>
//         <span>Name:  {profile.name}</span>
//         <span>  |  </span>
//         <span>Age:  {profile.age}</span>
//       </li>
//     );
//   });
//   console.log(updateProfiles);
  

//   return (
//     <div>
//       <h1>Rendering JSON</h1>
//       <ol>{updateProfiles}</ol>
      
//     </div>
//   )
// }
// export default App






// Hooks

const App = () => {
  const [username , setUsername ] = useState("Manish");
 
  let handleUserName = ()=>{
    setUsername("Priyanka");
  }

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={handleUserName}>Change Name</button>
    </div>
    
  )
}

export default App