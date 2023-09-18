import React from "react";

export const GetLogo = ({ Assets, useDarkMode, getIconNameWithTheme, img }) => {
    const { theme } = useDarkMode();
    const iconName = getIconNameWithTheme(img, theme);
    const { Logo } = Assets;
    return React.createElement(Logo[iconName], null, null);
};
