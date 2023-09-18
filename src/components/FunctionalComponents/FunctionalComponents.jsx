import { DisableLinks } from "./DisableLinks/DisableLinks";
import { GetLogo } from "./GetLogo/GetLogo";
import { Languages } from "./Localization/Languages/Languages.jsx";
import { LanguageProvider } from "./Localization/LanguageContext.jsx";
import { useLanguage } from "./Localization/LanguageContext.jsx";
import { Localization } from "./Localization/Localization.jsx";

import { NetworkStatus } from "./NetworkStatus/NetworkStatus";

import { DarkMode } from "./DarkMode/DarkMode";
import { DarkModeProvider } from "./DarkMode/DarkModeContext";
import { useDarkMode } from "./DarkMode/DarkModeContext";
import { RoutesComponent } from "./routes/RoutesComponent";

import { Posts } from "./Posts/Posts";

export const FunctionalComponents = {
    DisableLinks,
    GetLogo,
    Languages,
    LanguageProvider,
    useLanguage,
    Localization,
    NetworkStatus,
    DarkMode,
    DarkModeProvider,
    useDarkMode,
    RoutesComponent,
    Posts,
};
