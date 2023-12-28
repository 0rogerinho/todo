// React-router-dom
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { LoginPage, Todo } from '../pages';
// Components
import { NotFound } from '../Components';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/home" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
