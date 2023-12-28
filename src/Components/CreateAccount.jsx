/* eslint-disable react-hooks/exhaustive-deps */
// React
import { useEffect, useState } from 'react';
// React-router-dom
import { Link, useNavigate } from 'react-router-dom';
// Actions
import PostUser from '../actions/postUser';
// React icons
import { LuLoader2 } from 'react-icons/lu';

export const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { account, newUser, load } = PostUser();

  function handleSubmit(event) {
    event.preventDefault();
    account(username, email, password);
  }

  useEffect(() => {
    if (newUser && newUser.message) navigate('/login');
    console.log(newUser);
  }, [newUser]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] flex flex-col items-center justify-center min-h-screen gap-8 m-auto"
      action=""
    >
      <img src="/signUp.svg" alt="signUp" />
      <div className="relative flex flex-col w-full gap-1">
        <label className="text-xl font-semibold " htmlFor="email">
          Username
        </label>
        <input
          required
          value={username}
          id="username"
          className="w-full px-2 py-4 rounded-md outline-none"
          type="text"
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
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
        {newUser === 'Existing user' && (
          <span className="text-red-400 absolute top-[90px] transition duration-200">
            Existing user
          </span>
        )}
      </div>
      <div className="relative flex flex-col w-full gap-1">
        <label className="text-xl font-semibold" htmlFor="password">
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
      </div>
      <Link className="w-full" to="/login">
        <p className="text-end text-lg underline text-[#DEC74E] font-semibold">
          Login
        </p>
      </Link>
      <button className="w-full bg-[#459] py-4 rounded-md font-bold">
        {load ? (
          <LuLoader2 className="m-auto animate-spin" size={20} />
        ) : (
          'Send'
        )}
      </button>
    </form>
  );
};
