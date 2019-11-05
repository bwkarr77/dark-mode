import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage();

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [useDark]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
