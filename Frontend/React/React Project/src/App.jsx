import { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setindex] = useState(1);

  const prevHandler = () => {
    if (index > 1) setindex(index - 1);
    setUserData([]);
  };

  const nextHandler = () => {
    setindex(index + 1);
    setUserData([]);
  };

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (UserData.length > 0) {
    printUserData = UserData.map((elem) => (
      <a href={elem.url} target="_blank" key={elem.id}>
        <div>
          <div className="w-53 h-55 overflow-hidden rounded-xl">
            <img
              className="object-cover w-full h-full"
              src={elem.download_url}
              alt={elem.author}
            />
          </div>
          <h3 className="font-bold text-lg text-center">{elem.author}</h3>
        </div>
      </a>
    ));
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-5">
      {/* Image grid container */}
      <div className="flex flex-wrap gap-10 justify-center relative flex-1">
        {printUserData}
      </div>

      {/* Buttons always stay bottom */}
      <div className="flex justify-center items-center gap-5 pt-10">
        <button
          onClick={prevHandler}
          className="bg-amber-400 text-black text-xl px-5 py-2 font-bold active:scale-95 cursor-pointer rounded"
        >
          Prev
        </button>

        <p className="text-xl font-semibold">Page: {index}</p>

        <button
          onClick={nextHandler}
          className="bg-amber-400 text-black text-xl px-5 py-2 font-bold active:scale-95 cursor-pointer rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
