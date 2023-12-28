// React-router-dom
import { useNavigate } from 'react-router-dom';
// Assets
import img from '../assets/logoTodo.svg';

export const Header = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();

    localStorage.removeItem('user_id');
    navigate('/login');
  }

  return (
    <header className=" md:px-[20%] 2xl:px-[25%] 2xl:scale-125 relative h-[6.125rem] bg-[#0D0D0D] flex justify-center items-center">
      <img src={img} alt="Logo" />
      <button
        onClick={handleClick}
        className="absolute right-4  md:right-[20%] 2xl:right-[25%]"
      >
        Sair
      </button>
    </header>
  );
};
