import { Task } from './Task';
import { useContext, useEffect } from 'react';
import { newTask } from '../App';

export function TaskList() {
  const { tasks, setTasks } = useContext(newTask);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  useEffect(() => {
    if (tasks.length >= 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="flex justify-center 2xl:mt-5 px-2 md:px-[20%] 2xl:px-[25%] 2xl:scale-125">
      <section className="w-full mt-6 py-4 px-2 border-t rounded-[.5rem] border-[#333333]">
        <div
          className={`mt-12 flex flex-col justify-center items-center ${
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
        {tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            content={item.content}
            deleteTask={deleteTask}
            checked={item.checked}
          />
        ))}
      </section>
    </div>
  );
}
