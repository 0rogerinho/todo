import { useState } from 'react';

const PostUser = () => {
  const [newUser, setNewUser] = useState(null);
  const [load, setLoad] = useState(false);

  async function account(username, email, password) {
    try {
      setLoad(true);
      const response = await fetch(
        'https://puzzled-bull-gown.cyclic.cloud/user',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        },
      );
      const json = await response.json();
      setNewUser(json);
    } finally {
      setLoad(false);
    }
  }

  return { account, newUser, load };
};

export default PostUser;
