import { MainComponents } from "./components/Components";

export const Main = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
    getIconNameWithTheme,
    useLocalStorageState,
    RoutesComponent,
    MessagePanel,
    NetworkStatus,
    DarkMode,
    useDarkMode,
    GetLogo,
    Posts,
}) => {
    return (
        <main className="Main">
            <RoutesComponent
                MainComponents={MainComponents}
                MessagePanel={MessagePanel}
                Assets={Assets}
                Languages={Languages}
                Localization={Localization}
                useLanguage={useLanguage}
                NetworkStatus={NetworkStatus}
                getIconNameWithTheme={getIconNameWithTheme}
                useLocalStorageState={useLocalStorageState}
                DarkMode={DarkMode}
                useDarkMode={useDarkMode}
                GetLogo={GetLogo}
                Posts={Posts}
            />
        </main>
    );
};
