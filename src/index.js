import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "./css/index.min.css";

import { Assets } from "./assets/Assets";
import { Components } from "./components/Components";
import { App } from "./App";

const { Main, Header, Footer, FunctionalComponents } = Components;
const {
    DisableLinks,
    Languages,
    LanguageProvider,
    useLanguage,
    Localization,
    DarkMode,
    DarkModeProvider,
    useDarkMode,
} = FunctionalComponents;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DarkModeProvider>
                <LanguageProvider>
                    <App
                        Header={Header}
                        Main={Main}
                        Footer={Footer}
                        Assets={Assets}
                        DisableLinks={DisableLinks}
                        Languages={Languages}
                        useLanguage={useLanguage}
                        Localization={Localization}
                        DarkMode={DarkMode}
                        useDarkMode={useDarkMode}
                    />
                </LanguageProvider>
            </DarkModeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
