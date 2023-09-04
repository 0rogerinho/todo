import { useState } from 'react';

const PostUser = () => {
  const [newUser, setNewUser] = useState(null);

  async function account(username, email, password) {
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
  }

  return { account, newUser };
};

export default PostUser;
