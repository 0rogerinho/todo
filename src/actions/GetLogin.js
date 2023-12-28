import { useState } from 'react';

const GetLogin = () => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(false);

  async function login(email, password) {
    try {
      setLoad(true);
      const response = await fetch(
        'https://puzzled-bull-gown.cyclic.cloud/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password }),
        },
      );

      const json = await response.json();

      if (json !== 'user not found' && json !== 'invalid password') {
        localStorage.setItem('user_id', JSON.stringify(json));
      }
      setUser(json);
    } finally {
      setLoad(false);
    }
  }
  return { user, login, load };
};

export default GetLogin;
