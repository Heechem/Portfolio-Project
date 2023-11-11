'use client';
import { useThemeContext } from '@/context/theme-context';
import { BsMoon, BsSun } from 'react-icons/bs';

function ThemSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className=" fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemSwitch;
