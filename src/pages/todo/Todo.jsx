/* eslint-disable react-hooks/exhaustive-deps */
// React
import { useEffect } from 'react';
// React-router-dom
import { useNavigate } from 'react-router-dom';
// Context
import { ContextProvider } from '../../context';
// Actions
import GetTask from '../../actions/GetTask';
// Components
import { CreateTask, Header, TaskCount, TaskList } from '../../Components';

export const Todo = () => {
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
};
