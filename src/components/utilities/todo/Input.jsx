import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/actions/actions";
function Input() {
  const [listItem, setListItem] = useState("");
  // console.log(listItem);
  const dispatch = useDispatch();
  const sendItem = () => {
    dispatch(addItems(listItem));
    setListItem("");
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      sendItem();
    }
  };
  return (
    <div className="flex justify-center items-center m-4">
      <input
        type="text"
        placeholder="Enter you task"
        className="text-2xl m-1"
        onChange={(e) => setListItem(e.target.value)}
        value={listItem}
        onKeyDown={enterKey}
      />
      <button
        className="p-1 bg-gray-500 text-center rounded-lg hover:scale-105 active:scale-95 text-green-500"
        onClick={() => sendItem()}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
