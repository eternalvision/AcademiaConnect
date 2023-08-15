import { DisableLinks } from "./DisableLinks/DisableLinks";

import { Languages } from "./Localization/Languages/Languages.jsx";
import { LanguageProvider } from "./Localization/LanguageContext.jsx";
import { useLanguage } from "./Localization/LanguageContext.jsx";
import { Localization } from "./Localization/Localization.jsx";

import { DarkMode } from "./DarkMode/DarkMode";
import { DarkModeProvider } from "./DarkMode/DarkModeContext";
import { useDarkMode } from "./DarkMode/DarkModeContext";

export const FunctionalComponents = {
    DisableLinks,
    Languages,
    LanguageProvider,
    useLanguage,
    Localization,
    DarkMode,
    DarkModeProvider,
    useDarkMode,
};
