import { Header } from './Components/Header';
import { CreateTask } from './Components/CreateTask';
import { TaskCount } from './Components/TaskCount';
import { TaskList } from './Components/TaskList';
import './App.css';

import { createContext, useState } from 'react';

export const newTask = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <newTask.Provider value={{ tasks, setTasks }}>
          <CreateTask />
          <TaskCount />
          <TaskList />
        </newTask.Provider>
      </main>
    </>
  );
}
export default App;
