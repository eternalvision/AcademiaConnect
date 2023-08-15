import React from "react";
import { useLocation } from "react-router-dom";
import { Helpers } from "./helpers/Helpers";
import { RoutesComponent } from "./routes/RoutesComponent";

export const App = ({
    Header,
    Main,
    Footer,
    Assets,
    DisableLinks,
    Languages,
    useLanguage,
    Localization,
    DarkMode,
    useDarkMode,
}) => {
    const location = useLocation();
    const { selectedLang } = useLanguage();
    const { useLocalStorageState, getIconNameWithTheme, useActiveMenuId } =
        Helpers;

    const { activeMenuId, setActiveMenuId } = useActiveMenuId(
        Languages,
        selectedLang,
        location
    );

    return (
        <>
            <DisableLinks />
            <Header
                Assets={Assets}
                Languages={Languages}
                Localization={Localization}
                useLanguage={useLanguage}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                getIconNameWithTheme={getIconNameWithTheme}
                useLocalStorageState={useLocalStorageState}
                DarkMode={DarkMode}
                useDarkMode={useDarkMode}
            />
            <div className="RootContainers">
                <Main
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                    RoutesComponent={RoutesComponent}
                />
            </div>
        </>
    );
};
