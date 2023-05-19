import img from "./assets/logoTodo.svg";
export const Header = () => {
  return (
    <header className="max-w-full h-[6.125rem] bg-[#0D0D0D] flex justify-center items-center">
      <img src={img} alt="" />
    </header>
  );
};
