import { MainComponents } from "./components/Components";

export const Main = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
    RoutesComponent,
}) => {
    return (
        <main className="Main">
            <RoutesComponent
                MainComponents={MainComponents}
                Assets={Assets}
                Languages={Languages}
                Localization={Localization}
                useLanguage={useLanguage}
            />
        </main>
    );
};
