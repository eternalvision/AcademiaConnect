import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({
    Values,
    activeMenuId,
    setActiveMenuId,
    Assets,
    getIconNameWithTheme,
    theme,
}) => {
    const { Logo } = Assets;
    return (
        <ul className="HeaderMenu-list">
            {Values.map(({ id, linkTo, img, text }) => {
                const iconName = getIconNameWithTheme(img, theme);
                return (
                    <li key={id}>
                        <Link
                            className={
                                activeMenuId === id
                                    ? "activeMenu"
                                    : "emptyClass"
                            }
                            onClick={() => {
                                setActiveMenuId(id);
                            }}
                            to={linkTo}>
                            {React.createElement(Logo[iconName], null, null)}
                            <span>{text}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export const Menu = ({
    Assets,
    Languages,
    useLanguage,
    activeMenuId,
    setActiveMenuId,
    getIconNameWithTheme,
    useDarkMode,
}) => {
    const { selectedLang } = useLanguage();
    const Values = Languages.Menu()[selectedLang];
    const { theme } = useDarkMode();

    return (
        <>
            <section className="HeaderMenu">
                <MenuList
                    Values={Values}
                    activeMenuId={activeMenuId}
                    setActiveMenuId={setActiveMenuId}
                    Assets={Assets}
                    getIconNameWithTheme={getIconNameWithTheme}
                    theme={theme}
                />
            </section>
        </>
    );
};
