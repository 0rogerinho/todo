// React-router-dom
import { Route, Routes } from 'react-router-dom';
// Components
import { Login, CreateAccount } from '../../Components';

export const LoginPage = () => {
  return (
    <div className="px-2">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </div>
  );
};
