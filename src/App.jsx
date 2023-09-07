import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Todo from './Components/pages/todo/Todo';
import './App.css';
import LoginPage from './Components/pages/loginPages/LoginPage';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/home" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
