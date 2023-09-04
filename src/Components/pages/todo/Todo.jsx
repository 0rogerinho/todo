/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { CreateTask } from '../../CreateTask';
import { Header } from '../../Header';
import { TaskCount } from '../../TaskCount';
import { TaskList } from '../../TaskList';
import ContextProvider from '../../hooks/userIdContext';
import { useNavigate } from 'react-router-dom';
import GetTask from '../../actions/getTask';

function Todo() {
  const navigate = useNavigate();
  const userConnected = JSON.parse(localStorage.getItem('user_id'));

  console.log(userConnected);

  useEffect(() => {
    if (userConnected === null) {
      navigate('/login');
    }
  }, []);

  return (
    <ContextProvider>
      <GetTask />
      <Header />
      <CreateTask />
      <TaskCount />
      <TaskList />
    </ContextProvider>
  );
}
export default Todo;
