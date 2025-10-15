import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // title, message ko store karne ke liye
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,message});
    setTask(copyTask);

    // reset fields after submission
    setTitle('');
    setMessage('');
  };
  const deleteHandler = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }


  return (
    <div className='h-screen lg:flex-row flex flex-col gap-6'>
      <form className=" flex flex-col gap-5 lg:w-1/2 items-start lg:border-r-1 p-5 " onSubmit={submitHandler}>
        <h1 className='text-4xl text-black font-bold'>Add Task</h1>

        <input
          className="border rounded w-full p-2 outline-0"
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border rounded p-2 w-full h-30 outline-0"
          type="text"
          placeholder='Enter details about task'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="border rounded px-5 py-2 text-2xl font-medium bg-blue-500 text-white active:scale-95 cursor-pointer w-full">
          Add Task
        </button>
      </form>

      <div className='lg:w-1/2 pt-3'>
        <h1 className='text-4xl text-black font-bold'>Recent Task</h1>
        <div className='flex flex-wrap gap-6 mt-5'>
          {task.map((data, idx) =>{
            return <div key={idx} className='h-45 w-45 text-white rounded bg-gray-700 p-2 overflow-hidden flex flex-col items-start justify-between'>
              <div>
                <h3 className='text-2xl font-semibold tracking-tighter text-pink-300'>{data.title}</h3>
                <p className='mt-2 text-xs'>{data.message}</p>
              </div>

              <button
                onClick={() =>{deleteHandler(idx)}}
                className='text-xs bg-red-500 py-1 px-2 rounded font-bold active:scale-95'>
                Delete
              </button>
            </div>
          })}  
        </div>
        
      </div>
    </div>
  );
};

export default App;