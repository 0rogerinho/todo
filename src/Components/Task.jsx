/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// React
import { useContext, useState } from 'react';
// Actions
import PatchTask from '../actions/PatchTask';
import DeleteTask from '../actions/DeleteTask';
// Context
import { TaskContext } from '../context';
// React Icons
import { TbTrash } from 'react-icons/tb';
import { BsCheck } from 'react-icons/bs';

export const Task = ({ content, id, checked }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const allTask = tasks;

  const { stateTask } = PatchTask();

  const { removeTask } = DeleteTask();

  const [isChecked, setIsChecked] = useState(checked); // Inicializa com o valor de `checked` das props

  function handleCheckedTask(event) {
    event.preventDefault();

    const updateTask = allTask.filter((task) => {
      if (task._id === id) {
        console.log(task._id);
        task.state = !isChecked;
      }
      return task;
    });

    console.log(updateTask);
    setTasks(updateTask);

    stateTask(id, !isChecked);

    setIsChecked(!isChecked);
  }

  function handleDeleteTask(event) {
    event.preventDefault();

    const deleteTask = allTask.filter((task) => task._id !== id);

    setTasks(deleteTask);

    removeTask(id);
  }

  return (
    <div className="mb-[.75rem] px-3 w-full bg-[#262626] rounded-lg border-[#333333] min-h-[4.5rem] flex flex-row justify-between items-center gap-1 ">
      <div>
        <input
          onClick={handleCheckedTask}
          className="hidden mr-2"
          id={id}
          type="checkbox"
          defaultChecked={isChecked} // Define o valor do checkbox com base no estado `isChecked`
        />
        <label
          htmlFor={id}
          className={`block w-[20px] h-[20px] border-[3px] border-[#DEC74E] rounded-full mr-2 ${
            isChecked ? 'bg-[#696BFE]' : 'bg-transparent'
          } flex justify-center items-center`}
        >
          <BsCheck
            size={15}
            className={` ${isChecked ? 'block' : 'hidden'} `}
          />
        </label>
      </div>
      <div>
        <p
          className={`${isChecked ? 'line-through' : ''} ${
            isChecked ? 'text-[#808080]' : 'text-white'
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
