// React
import { useState } from 'react';
// Actions
import PostTask from '../actions/PostTask';
// React icons
import { IoMdAddCircleOutline } from 'react-icons/io';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const { newTask } = PostTask();

  function handleCreateNewTask(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle === '') {
      // Define o input como inválido
      setIsInputInvalid(true);
      return;
    }

    // Define o input como válido
    setIsInputInvalid(false);

    newTask(trimmedTitle);
    setTitle('');
  }

  return (
    <div className="relative flex flex-col mt-16 px-2 md:px-[20%] 2xl:px-[25%] 2xl:scale-125">
      <form
        onSubmit={handleCreateNewTask}
        action=""
        className="flex justify-between"
      >
        <input
          required
          value={title}
          name="content"
          className="w-[71%] md:w-[76%] lg:w-[81%] h-[3.375rem] rounded-[.5rem] p-4 bg-[#262626]"
          type="text"
          placeholder="add new task"
          onChange={({ target }) => setTitle(target.value)}
        />
        <span
          className={`absolute text-red-500  bottom-16 ${
            isInputInvalid ? 'opacity-100' : 'hidden'
          } transition-all duration-500`}
        >
          Fill in this field
        </span>
        <button
          className="w-[25%] md:w-[20%] lg:w-[15%] h-[3.375rem] bg-[#696BFE] rounded-[.5rem] font-[.875rem] font-bold"
          type="submit"
        >
          New
          <IoMdAddCircleOutline
            size="1.3rem"
            color="white"
            className="inline ml-2"
          />
        </button>
      </form>
    </div>
  );
};
