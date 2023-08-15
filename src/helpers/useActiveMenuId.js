import { useState, useEffect } from "react";

export const useActiveMenuId = (Languages, selectedLang, location) => {
    const [activeMenuId, setActiveMenuId] = useState(() => {
        const storedActiveMenuId = parseInt(
            localStorage.getItem("activeMenuId")
        );
        return isNaN(storedActiveMenuId) ? 0 : storedActiveMenuId;
    });

    useEffect(() => {
        const values = Languages.Menu()[selectedLang];
        const activeMenuItem = values.find(
            (val) => val.linkTo === location.pathname
        );
        setActiveMenuId(activeMenuItem ? activeMenuItem.id : 0);
    }, [Languages, selectedLang, location.pathname]);

    useEffect(() => {
        localStorage.setItem("activeMenuId", activeMenuId.toString());
    }, [activeMenuId]);

    return { activeMenuId, setActiveMenuId };
};
