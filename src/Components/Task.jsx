import { useContext, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import { newTask } from "../App";

export const Task = ({ content, id, deleteTask, checked }) => {
  const [isChecked, setIsChecked] = useState(checked); // Inicializa com o valor de `checked` das props
  const [tasks, setTasks] = useContext(newTask);

  function handleCheckedTask(event) {
    setIsChecked(event.target.checked);
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function handleDeleteTask() {
    deleteTask(id);
  }

  return (
    <div className="mb-[.75rem] p-4 w-full bg-[#262626] rounded-lg border-[#333333] min-h-[4.5rem] flex flex-row justify-between items-center gap-1 ">
      <div>
        <input
          onChange={handleCheckedTask}
          className="hidden mr-2"
          id={id}
          type="checkbox"
          checked={isChecked} // Define o valor do checkbox com base no estado `isChecked`
        />
        <label
          htmlFor={id}
          className={`block w-[20px] h-[20px] border-[3px] border-[#DEC74E] rounded-full mr-2 ${
            isChecked ? "bg-[#696BFE]" : "bg-transparent"
          } flex justify-center items-center`}
        >
          <BsCheck
            size={15}
            className={` ${isChecked ? "block" : "hidden"} `}
          />
        </label>
      </div>
      <div>
        <p
          className={`text-[.875rem] ${isChecked ? "line-through" : ""} ${
            isChecked ? "text-[#808080]" : "text-white"
          }`}
        >
          {content}
        </p>
      </div>
      <div>
        <TbTrash
          onClick={handleDeleteTask}
          className="cursor-pointer"
          color="#808080"
        />
      </div>
    </div>
  );
};
