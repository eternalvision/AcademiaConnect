import React, { useEffect } from "react";

export const DarkMode = ({ Assets, useDarkMode }) => {
    const body = document.body;

    const { RiSunLine, RiMoonFill } = Assets.Logo;
    const { theme, setTheme } = useDarkMode();

    useEffect(() => {
        body.classList.remove("light", "dark");
        body.classList.add(theme);
    }, [body, theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <section className="DarkMode">
            <button onClick={toggleTheme}>
                {theme === "light" ? <RiSunLine /> : <RiMoonFill />}
            </button>
        </section>
    );
};
