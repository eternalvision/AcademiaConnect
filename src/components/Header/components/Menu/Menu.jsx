import React from "react";
import { Link } from "react-router-dom";
const shortId = require("short-uuid");

export const Menu = ({
    Assets,
    Languages,
    useLanguage,
    activeMenuId,
    setActiveMenuId,
    getIconNameWithTheme,
    useDarkMode,
    GetLogo,
}) => {
    const { selectedLang } = useLanguage();
    const Values = Languages.Menu()[selectedLang];

    return (
        <>
            <section className="HeaderMenu">
                <ul className="HeaderMenu-list">
                    {Values.map(({ id, linkTo, img, text }) => {
                        return (
                            <li key={shortId.generate()}>
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
                                    <GetLogo
                                        Assets={Assets}
                                        useDarkMode={useDarkMode}
                                        getIconNameWithTheme={
                                            getIconNameWithTheme
                                        }
                                        img={img}
                                    />
                                    <span>{text}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};
