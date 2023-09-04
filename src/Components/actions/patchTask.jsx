const PatchTask = () => {
  const userId = JSON.parse(localStorage.getItem('user_id'));

  async function stateTask(id, state) {
    const response = await fetch(
      `https://puzzled-bull-gown.cyclic.cloud/user/task/${userId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task_id: id, state: state }),
      },
    );

    const json = await response.json();
    console.log(json);
  }
  return { stateTask };
};

export default PatchTask;
