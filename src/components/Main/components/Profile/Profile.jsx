import { useState } from "react";
import { ProfileComponents } from "./components/Components";

export const Profile = ({
    Assets,
    Languages,
    Localization,
    useLanguage,
    NetworkStatus,
    getIconNameWithTheme,
    DarkMode,
    useDarkMode,
    GetLogo,
    Posts,
}) => {
    const [componentReady, setComponentReady] = useState(false);
    const { UserCover, UserFriends, UserInfo, UserPosts, WorkExperience } =
        ProfileComponents;

    return (
        <ul className="MainList">
            <li className="MainList-Cover">
                <UserCover
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                />
            </li>
            <li className="MainList-UserInfo">
                <ul className="MainList-UserInfo__list">
                    <li className="MainList-UserInfo__list-UserInfo">
                        <UserInfo
                            Assets={Assets}
                            Languages={Languages}
                            Localization={Localization}
                            useLanguage={useLanguage}
                        />
                        <UserFriends
                            Assets={Assets}
                            Languages={Languages}
                            Localization={Localization}
                            useLanguage={useLanguage}
                            NetworkStatus={NetworkStatus}
                        />
                        <WorkExperience
                            Assets={Assets}
                            Languages={Languages}
                            Localization={Localization}
                            useLanguage={useLanguage}
                        />
                    </li>
                    <li>
                        <UserPosts
                            Assets={Assets}
                            Languages={Languages}
                            Localization={Localization}
                            useLanguage={useLanguage}
                            getIconNameWithTheme={getIconNameWithTheme}
                            DarkMode={DarkMode}
                            useDarkMode={useDarkMode}
                            GetLogo={GetLogo}
                            Posts={Posts}
                        />
                    </li>
                </ul>
            </li>
        </ul>
    );
};
