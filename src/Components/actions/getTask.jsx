/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import PostTask from './postTask';
import { TaskContext } from '../hooks/userIdContext';

const GetTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const { task } = PostTask();

  const userId = JSON.parse(localStorage.getItem('user_id'));

  useEffect(() => {
    async function allTasks() {
      const response = await fetch(
        `https://puzzled-bull-gown.cyclic.cloud/user/task?id=${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const json = await response.json();

      setTasks(json);
    }
    allTasks();
  }, [task]);

  return;
};

export default GetTask;
