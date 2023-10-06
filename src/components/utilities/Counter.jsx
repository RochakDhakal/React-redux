import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../redux/actions/actions";
function Counter() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex flex-col justify-evenly items-center">
        <span className="text-3xl">React Redux Counter App</span>
        <div className="flex m-80 bg-gray-700 p-2 rounded-md">
          <button
            className="p-2 bg-gray-400 rounded-md active:scale-95"
            onClick={() => dispatch(decNumber("DECREMENT"))}
          >
            Dec
          </button>
          <span className="p-2 bg-white rounded-md mx-2">{state}</span>
          <button
            className="p-2 bg-gray-400 rounded-md active:scale-95"
            onClick={() => dispatch(incNumber())}
          >
            Inc
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
