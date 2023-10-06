import React from "react";
import Input from "./Input";
import List from "./List";

function Todo() {
  return (
    <div className="h-screen bg-green-500 flex flex-col items-center">
      <Input />
      <List />
    </div>
  );
}

export default Todo;
