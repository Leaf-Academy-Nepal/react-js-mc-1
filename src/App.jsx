import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    { title: "Complete the homeworks" },
    { title: "Buy Shoes" },
  ]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
  //     .then((response) => response.json())
  //     .then((value) => setData(value));
  // }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function addToList() {
    setData([{ title: value }, ...data]);
    setValue("");
  }

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          New Task
        </label>
        <div className="d-flex">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={value}
            onChange={handleChange}
          />
          <button onClick={addToList} className="ms-2 btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </div>
        <div id="emailHelp" className="form-text">
          Write the todo to add to the list...
        </div>
      </div>
      {
        <ul className="list-group">
          {data.map((task, index) => (
            <li
              key={index}
              href="#"
              className="list-group-item list-group-item-action"
            >
              {task.title}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default App;
