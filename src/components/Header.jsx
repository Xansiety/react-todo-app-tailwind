import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialTheme = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialTheme);

    // Esta función se ejecuta cada vez que cambia el valor de darkMode, es decir estar pendiente de ese valor
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 transition-all duration-1000">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)} >
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
