"use client";
import { useState } from "react";

type CounterState = {
  count: number;
};

const Counter = () => {
  const [counter, setCounter] = useState<CounterState>({ count: 0 });

  const handleInc = (event: React.MouseEvent<HTMLElement>) => {
    setCounter({ count: counter.count + 1 });
  };

  const handleDec = (event: React.MouseEvent<HTMLElement>) => {
    setCounter({ count: counter.count - 1 });
  };

  const handleReset = (event: React.MouseEvent<HTMLElement>) => {
    setCounter({ count: 0 });
  };


  
  return (
    <>
      <h4 className="text-2xl text-gray-900 dark:text-dark mb-4">
        {counter.count}
      </h4>

      <div className="d-flex">
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={(event) => handleInc(event)}
        >
          Inc
        </button>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={(event) => handleDec(event)}
        >
          Dec
        </button>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={handleReset}
          disabled={counter.count === 0}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
