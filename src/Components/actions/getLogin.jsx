import { useState } from 'react';

const GetLogin = () => {
  const [user, setUser] = useState(null);

  async function login(email, password) {
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
  }

  return { user, login };
};

export default GetLogin;
