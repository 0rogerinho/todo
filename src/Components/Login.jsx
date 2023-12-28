/* eslint-disable react-hooks/exhaustive-deps */
// React
import { useEffect, useState } from 'react';
// React-router-dom
import { Link, useNavigate } from 'react-router-dom';
// Actions
import GetLogin from '../actions/GetLogin';
// React icons
import { LuLoader2 } from 'react-icons/lu';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const navigate = useNavigate();

  const { login, user, load } = GetLogin();

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (user && user['_id']) navigate('/home');
    if (userId) navigate('/home');
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] flex flex-col items-center justify-center min-h-screen gap-8 m-auto"
    >
      <img src="/login.svg" alt="login" />
      <div className="relative flex flex-col w-full gap-1">
        <label className="text-xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          required
          value={email}
          id="email"
          className="w-full px-2 py-4 rounded-md outline-none"
          type="email"
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        {user === 'user not found' && (
          <span className="text-red-400 absolute top-[90px] transition duration-200">
            user not found
          </span>
        )}
      </div>
      <div className="relative flex flex-col w-full gap-1">
        <label className="text-xl font-semibold " htmlFor="password">
          password
        </label>
        <input
          required
          value={password}
          id="password"
          className="w-full px-2 py-4 rounded-md outline-none"
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        {user === 'invalid password' && (
          <span className="text-red-400 absolute top-[90px] ">
            invalid password
          </span>
        )}
      </div>
      <Link className="w-full" to="/login/create">
        <p className="text-end w-full text-lg underline text-[#DEC74E] font-semibold">
          Sign up
        </p>
      </Link>
      <button className="w-full bg-[#459] h-[56px] rounded-md font-bold">
        {load ? (
          <LuLoader2 className="m-auto animate-spin" size={20} />
        ) : (
          'Send'
        )}
      </button>
    </form>
  );
};
