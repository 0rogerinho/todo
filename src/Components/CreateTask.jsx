import { IoMdAddCircleOutline } from 'react-icons/io';

import { useContext, useState } from 'react';
import { newTask } from '../App';

export const CreateTask = () => {
  const { tasks, setTasks } = useContext(newTask);
  const [content, setContent] = useState('');

  function handleCreateNewTask(event) {
    event.preventDefault();

    const teste = [
      ...tasks.reverse(),
      { id: tasks.length, content: `${content}`, checked: false },
    ].reverse();
    setTasks(teste);
    setContent('');
  }
  return (
    <div className="flex flex-col mt-16 px-2 md:px-[20%] 2xl:px-[25%] 2xl:scale-125">
      <form
        onSubmit={handleCreateNewTask}
        action=""
        className="flex justify-between"
      >
        <input
          name="conteudo"
          className="w-[71%] md:w-[76%] lg:w-[81%] h-[3.375rem] rounded-[.5rem] p-4 bg-[#262626]"
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          className="w-[25%] md:w-[20%] lg:w-[15%] h-[3.375rem] bg-[#696BFE] rounded-[.5rem] font-[.875rem] font-bold"
          type="submit"
        >
          Criar
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
