import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/utilities/Counter";
import Navigation from "./components/utilities/Navigation";
import Todo from "./components/utilities/todo/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/counter" index element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
