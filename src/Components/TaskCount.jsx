import { useContext, useEffect, useState } from "react";
import { newTask } from "../App";

export const TaskCount = () => {
  const [tasks, setTasks] = useContext(newTask);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const completedCount = tasks.filter((task) => task.checked).length;
    setCompletedTasks(completedCount);
  }, [tasks]);

  return (
    <div className="mt-[2.5rem] flex justify-center">
      <section className="w-[46rem] mt-[2.5rem] flex flex-row justify-between">
        <div className="flex gap-2">
          <h1 className="font-[.875rem] font-bold text-[#DEC74E]">
            Tarefas Criadas
          </h1>
          <span className="pl-2 pr-2 border rounded-[62.4375rem] bg-[#333333]">
            {tasks.length}
          </span>
        </div>
        <div className="flex gap-2">
          <h1 className="font-[.875rem] font-bold text-[#696BFE]">
            Tarefas Concluídas
          </h1>
          <span className="pl-2 pr-2 border rounded-[62.4375rem] bg-[#333333]">
            {completedTasks} de {tasks.length}
          </span>
        </div>
      </section>
    </div>
  );
};
