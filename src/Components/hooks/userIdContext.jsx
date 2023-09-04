/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const TaskContext = createContext('test');

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default ContextProvider;
