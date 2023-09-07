/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GetLogin from './actions/getLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const navigate = useNavigate();

  const { login, user } = GetLogin();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
    console.log(password);
    console.log(user);

    login(email, password);
  }

  useEffect(() => {
    if ((user && user['_id']) || userId) navigate('/home');
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col justify-center items-center gap-8"
    >
      <img src="/login.svg" alt="login" />
      <div className="flex flex-col gap-2 relative">
        <label className="text-xl font-semibold " htmlFor="email">
          Email
        </label>
        <input
          required
          value={email}
          id="email"
          className="min-w-[500px] min-h-[55px] px-2 outline-none rounded-md"
          type="email"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        {user === 'user not found' && (
          <span className="text-red-400 absolute top-[90px] transition duration-200">
            user not found
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 relative">
        <label className="text-xl font-semibold " htmlFor="password">
          password
        </label>
        <input
          required
          value={password}
          id="password"
          className="min-w-[500px] min-h-[55px] px-2 outline-none rounded-md"
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        {userId === 'invalid password' && (
          <span className="text-red-400 absolute top-[90px] ">
            invalid password
          </span>
        )}
      </div>
      <Link to="/login/create">
        <p className="text-lg underline text-[#DEC74E] font-semibold">
          Sign up
        </p>
      </Link>
      <button className="min-w-[200px] bg-[#459] py-4 rounded-md">Send</button>
    </form>
  );
};

export default Login;
