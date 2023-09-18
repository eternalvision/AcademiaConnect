import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "./css/index.min.css";

import { Assets } from "./assets/Assets";
import { Components } from "./components/Components";
import { App } from "./App";

const { Main, Header, FunctionalComponents, MessagePanel } = Components;
const {
    DisableLinks,
    Languages,
    LanguageProvider,
    useLanguage,
    Localization,
    DarkMode,
    DarkModeProvider,
    useDarkMode,
    RoutesComponent,
    NetworkStatus,
    GetLogo,
    Posts,
} = FunctionalComponents;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DarkModeProvider>
                <LanguageProvider>
                    <App
                        Header={Header}
                        Main={Main}
                        Assets={Assets}
                        DisableLinks={DisableLinks}
                        Languages={Languages}
                        useLanguage={useLanguage}
                        Localization={Localization}
                        DarkMode={DarkMode}
                        useDarkMode={useDarkMode}
                        RoutesComponent={RoutesComponent}
                        MessagePanel={MessagePanel}
                        NetworkStatus={NetworkStatus}
                        GetLogo={GetLogo}
                        Posts={Posts}
                    />
                </LanguageProvider>
            </DarkModeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
