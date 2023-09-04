import { useContext } from 'react';
import { TaskContext } from '../hooks/userIdContext';

const PostTask = () => {
  const { tasks, setTask } = useContext(TaskContext);

  const userId = JSON.parse(localStorage.getItem('user_id'));

  async function newTask(title) {
    const response = await fetch(
      'https://puzzled-bull-gown.cyclic.cloud/user/task',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, title: title }),
      },
    );
    const json = await response.json();
    setTask(...tasks, json);
  }

  return { newTask };
};

export default PostTask;
