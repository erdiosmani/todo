import { useState } from "react";

import Todo from "./Todo";
import TodoCompleted from "./TodoCompleted";

const MainComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [completdTasks, setCompletedTasks] = useState([]);


  const onTodoInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const onSubmitTodoInput = (event) => {
    if (event.key === "Enter") {
      if (todoInput !== "" && todoInput !== null) {
        addItemToList();
      }
    }
  };

  const addItemToList = () => {
    setTodoList((prevState) => [...prevState, todoInput]);

    setTodoInput("");
  };

  const onDeleteItem = (itemIndex) => {
    setTodoList(todoList.filter((item, index) => index !== itemIndex));
  };

  const onEditItem = (itemIndex, input) => {
    let itemArray = [...todoList];

    itemArray[itemIndex] = input;

    setTodoList(itemArray);
  };

  const addToCompletedTasks = (itemIndex,item) =>{
    setCompletedTasks((prevState) => [...prevState, item]);
    setTodoList(todoList.filter((item, index) => index !== itemIndex));
  }

  return (
    <>
    <div className="flex justify-center mt-5">
      <h1 className="text-center text-2xl bg-orange-500 rounded-xl w-32 text-white ">Add task</h1>
    </div>
    <div className="flex flex-row justify-center mt-10">
      <input
        placeholder="Todo task"
        value={todoInput}
        onChange={onTodoInputChange}
        onKeyDown={onSubmitTodoInput}
        className="bg-transparent border rounded-xl mr-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5  border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={addItemToList}>ADD</button>
      </div>
      <div className="absolute  right-0 h-30  ml-5  bg-slate-500 p-10 flex flex-row space-x-5 w-6/12   mt-1 rounded-xl ">
        <div className="flex flex-col">
       {completdTasks &&
        completdTasks.map((item, index) => (
          <input value={item} className="mt-2"/>
        ))}
        </div>
        </div>

      {todoList &&
        todoList.map((item, index) => (
          <Todo
            todoDesc={item}
            key={index}
            index={index}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            addToCompletedTasks={addToCompletedTasks}
          />
        ))}

        
    {/* <div className="flex flex-col justify-center items-center content-center mt-32">
      <p>Todo items :  {todoList.length}</p>
    </div> */}
    </>
  );
};

export default MainComponent;
