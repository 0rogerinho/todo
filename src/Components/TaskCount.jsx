// React
import { useContext } from 'react';
// Context
import { TaskContext } from '../context';

export const TaskCount = () => {
  const { tasks } = useContext(TaskContext);

  const completedCount = tasks.filter((task) => task.state === true).length;

  return (
    <div className="px-2 mt-1 flex justify-between md:px-[20%] 2xl:px-[25%] 2xl:scale-125">
      <section className="w-full mt-[2.5rem] flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:gap-2 md:space-x-0">
          <h1 className="font-bold inline-block text-[#DEC74E]">
            task created
          </h1>

          <span className="px-2 border rounded-full bg-[#333333]">
            {tasks.length}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:gap-2 md:space-y-0">
          <h1 className="font-[.875rem] font-bold text-[#696BFE]">
            task completed
          </h1>

          <span className="px-2 border rounded-full bg-[#333333]">
            {completedCount} of {tasks.length}
          </span>
        </div>
      </section>
    </div>
  );
};
