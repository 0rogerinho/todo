import { Route, Routes } from 'react-router-dom';
import Login from '../../Login';
import CreateAccount from '../../CreateAccount';

const LoginPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<CreateAccount />} />
    </Routes>
  );
};

export default LoginPage;
