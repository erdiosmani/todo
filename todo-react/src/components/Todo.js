import {BsFillTrashFill, BsCheckLg} from "react-icons/bs";

const Todo = ({ todoDesc, index, onDeleteItem,onEditItem,addToCompletedTasks }) => {
  const onDelete = () => {
    onDeleteItem(index);
  };

  const OnEdit = event=>{
    onEditItem(index,event.target.value);
  }

  const onComplete = event =>{
    addToCompletedTasks(index,todoDesc);
  }

  return (
    <>
      <div className="bg-slate-400 p-10 flex flex-row space-x-5 w-6/12 justify-center items-center content-center  mt-1 rounded-xl ">
        <div className="w-full">
        <input 
            value={todoDesc}
            onChange={OnEdit}
            className="bg-transparent border  w-full rounded-xl mr-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </div>

        <button onClick={onDelete} className="text-2xl text-blue-500 hover:text-white"><BsFillTrashFill/></button>
        <button onClick={onComplete}><BsCheckLg className="text-2xl text-blue-500 hover:text-white"/></button>
      </div>
    </>
  );
};

export default Todo;
