const DeleteTask = () => {
  const userId = JSON.parse(localStorage.getItem('user_id'));

  async function removeTask(id) {
    const response = await fetch(
      `https://puzzled-bull-gown.cyclic.cloud/user/task/${userId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task_id: id }),
      },
    );

    const json = await response.json();
    console.log(json);
  }
  return { removeTask };
};

export default DeleteTask;
