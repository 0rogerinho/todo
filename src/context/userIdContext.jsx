/* eslint-disable react/prop-types */
// React
import { createContext, useState } from 'react';

export const TaskContext = createContext('');

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
