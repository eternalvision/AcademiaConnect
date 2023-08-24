import { HeaderComponents } from "./components/Components";

export const Header = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
    activeMenuId,
    setActiveMenuId,
    getIconNameWithTheme,
    useLocalStorageState,
    DarkMode,
    useDarkMode,
}) => {
    const { Logo, Menu } = HeaderComponents;
    return (
        <header className="Header">
            <ul className="HeaderList">
                <li>
                    <Logo Assets={Assets} />
                </li>
                <li>
                    <Menu
                        Assets={Assets}
                        Languages={Languages}
                        useLanguage={useLanguage}
                        activeMenuId={activeMenuId}
                        setActiveMenuId={setActiveMenuId}
                        getIconNameWithTheme={getIconNameWithTheme}
                        useLocalStorageState={useLocalStorageState}
                        useDarkMode={useDarkMode}
                    />
                </li>
                <li>
                    <div>
                        <DarkMode Assets={Assets} useDarkMode={useDarkMode} />
                        <Localization />
                    </div>
                </li>
            </ul>
        </header>
    );
};
