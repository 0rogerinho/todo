/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostUser from './actions/postUser';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { account, newUser } = PostUser();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username);
    console.log(email);
    console.log(password);

    account(username, email, password);
  }

  useEffect(() => {
    if (newUser && newUser.message) navigate('/login');
    console.log(newUser);
  }, [newUser]);

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col justify-center items-center gap-8"
      action=""
    >
      <img src="/signUp.svg" alt="signUp" />
      <div className="flex flex-col gap-2 relative">
        <label className="text-xl font-semibold " htmlFor="email">
          Username
        </label>
        <input
          required
          value={username}
          id="username"
          className="min-w-[500px] px-2  py-4 outline-none rounded-md"
          type="text"
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 relative">
        <label className="text-xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          required
          value={email}
          id="email"
          className="min-w-[500px] px-2  py-4 outline-none rounded-md"
          type="email"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        {newUser === 'Existing user' && (
          <span className="text-red-400 absolute top-[90px] transition duration-200">
            Existing user
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 relative">
        <label className="text-xl font-semibold" htmlFor="password">
          password
        </label>
        <input
          required
          value={password}
          id="password"
          className="min-w-[500px] px-2  py-4 outline-none rounded-md"
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Link to="/login">
        <p className="text-lg underline text-[#DEC74E] font-semibold">Login</p>
      </Link>
      <button className="min-w-[200px] bg-[#459] py-4 rounded-md">Send</button>
    </form>
  );
};

export default CreateAccount;
