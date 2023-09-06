import { useContext } from 'react';
import { Task } from './Task';
import { TaskContext } from './hooks/userIdContext';

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="flex justify-center 2xl:mt-5 px-2 md:px-[20%] 2xl:px-[25%] 2xl:scale-125">
      <section className="w-full mt-6 py-4 px-2 border-t rounded-[.5rem] border-[#333333]">
        <div
          className={`mt-12 flex text-center flex-col justify-center items-center ${
            tasks.length === 0 ? 'block' : 'hidden'
          }`}
        >
          <img src="prancheta.svg" />
          <p className="mt-[1rem] text-[#808080] font-bold">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="text-[#808080]">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
        {tasks.map(({ _id, title, state }) => (
          <Task key={_id} id={_id} content={title} checked={state} />
        ))}
      </section>
    </div>
  );
}
