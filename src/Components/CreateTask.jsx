import { IoMdAddCircleOutline } from "react-icons/io";

import { useContext, useState } from "react";
import { newTask } from "../App";

export const CreateTask = () => {
  const [tasks, setTasks] = useContext(newTask);
  const [content, setContent] = useState("");

  function handleCreateNewTask(event) {
    event.preventDefault();

    const teste = [
      ...tasks.reverse(),
      { id: tasks.length, content: `${content}`, checked: false },
    ].reverse();
    setTasks(teste);
    setContent("");
  }
  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleCreateNewTask}
        action=""
        className="flex justify-center mt-[120px]"
      >
        <input
          name="conteudo"
          className="w-[39.875rem] h-[3.375rem] rounded-[.5rem] p-4 bg-[#262626]"
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          className="ml-2 p-[1rem] bg-[#696BFE] rounded-[.5rem] font-[.875rem] font-bold"
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
