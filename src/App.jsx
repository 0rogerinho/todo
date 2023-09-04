import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Todo from './Components/pages/todo/Todo';
import './App.css';
import LoginPage from './Components/pages/loginPages/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/home" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
